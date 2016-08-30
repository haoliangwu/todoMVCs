import angular from 'angular'
import { tab, tabs } from './components'

import './main.css'

angular
  .module('app', [])
  .component('tab', tab)
  .component('tabs', tabs)

if (module.hot) module.hot.accept()
