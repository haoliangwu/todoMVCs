import angular from 'angular'
import animate from 'angular-animate'
import { animate1 } from './components'

angular.module('app', [animate])
  .component('animate1', animate1)

if (module.hot) module.hot.accept()
