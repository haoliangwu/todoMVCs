import angular from 'angular'
import rx from 'rx-angular'
// import { Observable } from 'rxjs'

class AppCtrl {
  constructor ($scope, observeOnScope) {
    $scope.time = Date.now()

    rx.Observable.interval(1000, new rx.ScopeScheduler($scope))
      .subscribe(function () { $scope.time = Date.now() })
  }
}

angular.module('app', ['rx'])
  .directive('oaExample', function () {
    return {
      restrict: 'AE',
      template: `<input ng-model="$ctrl.name" />{{$ctrl.namea}}{{time}}
      `,
      controller: 'AppCtrl',
      controllerAs: '$ctrl'
    }
  })
  .controller('AppCtrl', AppCtrl)
