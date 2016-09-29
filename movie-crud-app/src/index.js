import angular from 'angular'
import { movies, movie_add, movie_edit, movie_view } from './components'
import { movieService } from './services'

import './main.css'

angular
  .module('movie-crud-app', ['ui.router', 'ngResource'])
  .component('movies', movies)
  .component('add', movie_add)
  .component('edit', movie_edit)
  .component('view', movie_view)
  .config([ '$stateProvider', function (states) {
    states.state({
      name: 'movies',
      url: '/movies',
      component: 'movies',
      resolve: {
        movies: ['$resource', function ($resource) {
          return movieService.movieResource($resource).query()
        }]
      }
    })

    states.state({
      name: 'viewMovie',
      url: '/movies/:id/view',
      component: 'view'
    })

    states.state({
      name: 'newMovie',
      url: '/movies/new',
      component: 'add'
    })

    states.state({
      name: 'editMovie',
      url: '/movies/:id/edit',
      component: 'edit'
    })
  }])

if (module.hot) module.hot.accept()
