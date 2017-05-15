import angular from 'angular'
import actions from './actions'
import todoAppReducers from './reducers'
import ngRedux from 'ng-redux'
import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise'

const loggerMiddleware = createLogger({ collapsed: true })

const $app = document.querySelector('#app')

$app.setAttribute('ng-app', 'app')
$app.innerHTML = `<app></app>`

class AppCtrl {
  constructor ($ngRedux, $q) {
    this.$ngRedux = $ngRedux
    this.$q = $q
  }

  $onInit () {
    this.unsubscribe = this.$ngRedux.connect(state => {
      return state
    }, actions)(this)

    this.newTodo = ''
  }

  addTodoItem () {
    this.addTodo(this.$q.resolve({text: this.newTodo}))
  }

  $onDestroy () {
    this.unsubscribe()
  }
}

AppCtrl.$inject = ['$ngRedux', '$q']

const template = `
<h1>ngRedux TodoList</h1>
<input type="text" ng-model="$ctrl.newTodo">
<button ng-click="$ctrl.addTodoItem()">Add</button>

<ul>
  <li ng-repeat="todo in $ctrl.todos track by $index">{{todo | json}}</li>
</ul>

<div id="devTools"></div>
`

angular.module('app', [ngRedux])
  .config(($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(todoAppReducers, [promiseMiddleware, loggerMiddleware], [window.__REDUX_DEVTOOLS_EXTENSION__()])
  })
  .run(($ngRedux, $rootScope, $timeout) => {
    // To reflect state changes when disabling/enabling actions via the monitor
    // there is probably a smarter way to achieve that
    $ngRedux.subscribe(() => {
      $timeout(() => { $rootScope.$apply(() => { }) }, 100)
    })
  })
  .component('app', {
    template,
    controller: AppCtrl
  })
