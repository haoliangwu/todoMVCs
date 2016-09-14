import angular from 'angular'
import animate from 'angular-animate'
import { animate1, animate2 } from './components'

angular.module('app', [animate])
  .component('animate1', animate1)
  .component('animate2', animate2)

if (module.hot) module.hot.accept()
