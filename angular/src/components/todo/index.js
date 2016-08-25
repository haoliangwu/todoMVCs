import angular from 'angular'
import TodoController from './controller'

import template from './template.html'

export default angular.module('todo', []).component('todo', {
  template: template,
  controller: TodoController
}).name
