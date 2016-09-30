const $resource = angular.injector(['ngResource']).get('$resource')

const movieResource = $resource('http://movieapp-sitepointdemos.rhcloud.com/api/movies/:id', { id: '@_id' }, {
  update: {
    method: 'PUT'
  }
})

export default {
  getAllMovies: function () {
    return new Promise(function (res) {
      movieResource.query(function (movies) {
        res(movies)
      })
    })
  },

  getMovieById: function (id) {
    return new Promise(function (res) {
      movieResource.get({id}, function (movie) {
        res(movie)
      })
    })
  },

  createMovie: function () {
    return new movieResource()
  }
}
