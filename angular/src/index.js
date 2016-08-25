import angular from 'angular'
import { todo, todoItems } from './components'

angular.module('todomvc', [todo, todoItems])

if (module.hot) module.hot.accept()
