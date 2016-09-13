export default class MainCtrl {
  $onInit () {
    this.boxClass = true
  }

  getClassName (boxClass) {
    return boxClass ? 'box' : 'circle'
  }
}
