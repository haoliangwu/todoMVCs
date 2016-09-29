export default {
  movieResource: function ($resource) {
    return $resource('http://movieapp-sitepointdemos.rhcloud.com/api/movies/:id', { id: '@_id' }, {
      update: {
        method: 'PUT'
      }
    })
  }
}
