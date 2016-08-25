import angular from 'angular'
import { todo, todoItems } from './components'

import './main.css'

angular.module('todomvc', [todo, todoItems])

if (module.hot) module.hot.accept()
