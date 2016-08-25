import angular from 'angular'
import controller from './controller'
import template from './template.html'

export default angular.module('todoItems', []).component('todoItems', {
  template: template,
  controller: controller
}).name
