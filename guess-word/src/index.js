import angular from 'angular'
import { guessWord } from './components'

import './main.css'

angular.module('guess-game', [guessWord])

if (module.hot) module.hot.accept()
