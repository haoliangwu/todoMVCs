import angular from 'angular'
import { hello, about, people, person } from './components'
import { peopleService } from './services'

// import './main.css'

angular
  .module('hellosolarsystem', ['ui.router'])
  .component('hello', hello)
  .component('about', about)
  .component('people', people)
  .component('person', person)
  .config(function ($stateProvider) {
    // hello
    $stateProvider.state({
      name: 'hello',
      url: '/hello',
      component: 'hello'
    })
    // about
    $stateProvider.state({
      name: 'about',
      url: '/about',
      component: 'about'
    })

    $stateProvider.state({
      name: 'people',
      url: '/people',
      component: 'people',
      resolve: {
        people: function () {
          return peopleService.getAllPeople()
        }
      }
    })

    $stateProvider.state({
      name: 'person',
      url: '/person/{personId}',
      component: 'person',
      resolve: {
        person: function ($transition$) {
          return peopleService.getPerson($transition$.params().personId)
        }
      }
    })
  })

if (module.hot) module.hot.accept()
