import { movieService } from '../../services'

export default class MovieViewCtrl {
  constructor ($resource, $stateParams) {
    this._$resource = movieService.movieResource($resource)
    this._$stateParams = $stateParams
  }

  $onInit () {
    this.movie = this._$resource.get({ id: this._$stateParams.id })
  }
}
