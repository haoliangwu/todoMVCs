export default class ParentController {
  $onInit () {
    this.user = {
      name: 'Lyon',
      location: 'Dalian'
    }
  }

  changeUser () {
    this.user = {
      name: 'Haoliang Wu',
      location: 'Shanxi'
    }
  }

  updateUser (e) {
    this.user = e.user
  }
}
