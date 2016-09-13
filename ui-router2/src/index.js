import angular from 'angular'
import { hello, about, people, person } from './components'
import { peopleService } from './services'

// import './main.css'

angular
  .module('hellosolarsystem', ['ui.router', 'ui.router.visualizer'])
  .component('hello', hello)
  .component('about', about)
  .component('people', people)
  .component('person', person)
  .config([ '$stateProvider', function (states) {
    // hello
    states.state({
      name: 'hello',
      url: '/hello',
      component: 'hello'
    })
    // about
    states.state({
      name: 'about',
      url: '/about',
      component: 'about'
    })

    states.state({
      name: 'people',
      url: '/people',
      component: 'people',
      resolve: {
        people: function () {
          return peopleService.getAllPeople()
        }
      }
    })

    states.state({
      name: 'person',
      url: '/person/{personId}',
      component: 'person',
      resolve: {
        person: ['$transition$', function ($transition$) {
          return peopleService.getPerson($transition$.params().personId)
        }]
      }
    })
  }])

if (module.hot) module.hot.accept()
