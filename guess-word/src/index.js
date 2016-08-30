import angular from 'angular'
import { guessWord } from './components'

import './main.css'

angular.module('guess', [guessWord])

if (module.hot) module.hot.accept()
