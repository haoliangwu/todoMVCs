import { movieService } from '../../services'

export default class MovieEditCtrl {
  constructor ($resource, $state, $stateParams) {
    this._$resource = movieService.movieResource($resource)
    this._$state = $state
    this._$stateParams = $stateParams
  }

  $onInit () {
    this.updateMovie = function () { // Update the edited movie. Issues a PUT to /api/movies/:id
      this.movie.$update(() => {
        this._$state.go('movies')
      // on success go back to home i.e. movies state.
      })
    }

    this.loadMovie() // Load a movie which can be edited on UI
  }

  loadMovie () { // Issues a GET request to /api/movies/:id to get a movie to update
    this.movie = this._$resource.get({ id: this._$stateParams.id })
  }
}
