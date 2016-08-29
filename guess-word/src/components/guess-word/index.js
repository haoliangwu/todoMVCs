import angular from 'angular'
import controller from './controller'
import template from './template.html'

import './main.css'

export default angular.module('guessWord', []).component('guessWord', {
  template: template,
  controller: controller
}).name
