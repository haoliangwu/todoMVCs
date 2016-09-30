import { movieService } from '../../services'

export default class MovieCreateCtrl {
  constructor ($state) {
    this._$resource = movieService.movieResource()
    this._$state = $state
  }

  $onInit () {
    this.movie = new this._$resource()
    this.addMovie = function () { // create a new movie. Issues a POST to /api/movies
      this.movie.$save(() => {
        this._$state.go('movies') // on success go back to home i.e. movies state.
      })
    }
  }

}
