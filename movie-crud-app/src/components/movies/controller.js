import { movieService } from '../../services'

export default class MovieListCtrl {
  constructor ($resource, $state) {
    this._$resource = movieService.movieResource($resource)
    this._$state = $state
  }

  $onInit () {
    this.movies = this._$resource.query()
    this.deleteMovie = function (movie) {
      movie.$delete(() => {
        this._$state.go('movies') // redirect to home
      })
    }
  }
}
