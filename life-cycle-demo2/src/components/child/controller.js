import angular from 'angular'

export default class ChildController {
  $onChanges (changes) {
    if (changes.user && !changes.user.isFirstChange()) this.user = angular.copy(this.user)
  }

  saveUser () {
    this.onUpdate({
      $event: {
        user: this.user
      }
    })
  }

  $onDestroy () {
    // whatever..
  }
}
