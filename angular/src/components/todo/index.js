import angular from 'angular'
import controller from './controller'
import template from './template.html'

export default angular.module('todo', []).component('todo', {
  template: template,
  controller: controller,
  bindings: {
    name: '<',
    placeholder: '<'
  }
}).name
