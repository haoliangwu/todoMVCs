import angular from 'angular'
import { hello, about, people, person } from './components'
import { peopleService } from './services'

import './css/main.scss'

angular
  .module('hellosolarsystem', ['ui.router'])
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
      name: 'people.person',
      url: '/{personId}',
      component: 'person',
      resolve: {
        person: ['people', '$stateParams', function (people, $stateParams) {
          return people.find(function (person) {
            return person.id === $stateParams.personId
          })
        }]
      }
    })
  }])
  .run(['ng1UIRouter', function (ng1UIRouter) {
    window['ui-router-visualizer'].visualizer(ng1UIRouter)
  }])

if (module.hot) module.hot.accept()
