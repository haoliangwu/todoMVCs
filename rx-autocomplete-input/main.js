import angular from 'angular'
import { Observable } from 'rxjs'
import 'rx-angular'
import 'angular1-async-filter'

function searchGitHub (term) {
  var apiUrl = 'https://api.github.com/search/users?q='

  return Observable.create((observer) => {
    fetch(apiUrl + term)
      .then(res => res.json())
      .then(json => {
        observer.next(json)
        observer.complete()
      }).catch(observer.onError)
  })
    .map(json => {
      return json.items.map(item => item.login)
    })
}

angular.module('app', ['rx', 'asyncFilter'])
  .directive('autoComplete', function () {
    return {
      scope: {},
      template: '<input ng-model="val" ng-change="update(val)" />' +
        '<ul class="suggestions">' +
        '<li ng-repeat="suggestion in suggestions | async:this">' +
        '<a href="https://github.com/{{ suggestion }}"' +
        ' target="_blank">{{ suggestion }}</a>' +
        '</li>' +
        '</ul>',
      link: function (scope, element) {
        scope.suggestions = Observable
          .fromEvent(element.find('input'), 'keyup')
          .map(e => e.target.value)
          .debounce(() => Observable.interval(1000))
          .map(keyword => keyword.trim())
          .filter(keyword => keyword.length > 0)
          .distinctUntilChanged()
          .map(keyword => searchGitHub(keyword))
          .switch()
      }
    }
  })
