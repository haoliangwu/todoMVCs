import angular from 'angular'
import { todo } from './components'

angular.module('todomvc', [todo])

if (module.hot) module.hot.accept()
