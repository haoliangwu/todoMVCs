export default class MovieListCtrl {
  constructor ($state) {
    this._$state = $state
  }

  $onInit () {
    this.deleteMovie = function (movie) {
      movie.$delete(() => {
        this._$state.reload('movies') // redirect to home
      })
    }
  }
}
