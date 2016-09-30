import angular from 'angular'
import { movies, movie_add, movie_edit, movie_view } from './components'
import { movieService } from './services'

import './main.css'

angular
  .module('movie-crud-app', ['ui.router'])
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
        movies: function () {
          return movieService.getAllMovies()
        }
      }
    })

    states.state({
      name: 'newMovie',
      url: '/movies/new',
      component: 'add'
    })

    states.state({
      name: 'movies.viewMovie',
      url: '/:id/view',
      component: 'view',
      resolve: {
        movie: ['movies', '$stateParams', function (movies, $stateParams) {
          if (!movies.$resolved) return movieService.getMovieById({ id: $stateParams.id })

          console.log("use the context's movies")
          return movies.find(movie => movie._id === +$stateParams.id)
        }]
      }
    })

    states.state({
      name: 'movies.editMovie',
      url: '/:id/edit',
      component: 'edit',
      resolve: {
        movie: ['movies', '$stateParams', function (movies, $stateParams) {
          if (!movies.$resolved) return movieService.getMovieById({ id: $stateParams.id })

          console.log("use the context's movies")
          return movies.find(movie => movie._id === +$stateParams.id)
        }]
      }
    })
  }])

if (module.hot) module.hot.accept()
