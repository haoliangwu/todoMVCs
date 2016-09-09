import angular from 'angular'
import { tab, tabs, wrapper } from './components'

import './main.css'

angular
  .module('app', [])
  .component('tab', tab)
  .component('tabs', tabs)
  .component('wrapper', wrapper)

if (module.hot) module.hot.accept()
