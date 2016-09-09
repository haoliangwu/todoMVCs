import angular from 'angular'
import { child, parent } from './components'

import './main.css'

angular
  .module('app', [])
  .component('parent', parent)
  .component('child', child)

if (module.hot) module.hot.accept()
