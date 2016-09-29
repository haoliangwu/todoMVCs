export default class MovieListCtrl {
  constructor ($state) {
    this._$state = $state
  }

  $onInit () {
    this.deleteMovie = function (movie) {
      movie.$delete(() => {
        this._$state.go('movies') // redirect to home
      })
    }
  }
}
