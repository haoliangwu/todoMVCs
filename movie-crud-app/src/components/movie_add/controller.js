import { movieService } from '../../services'

export default class MovieCreateCtrl {
  constructor ($state) {
    this._$state = $state
  }

  $onInit () {
    this.movie = movieService.createMovie()
    this.addMovie = function () { // create a new movie. Issues a POST to /api/movies
      this.movie.$save(() => {
        this._$state.go('movies') // on success go back to home i.e. movies state.
      })
    }
  }

}
