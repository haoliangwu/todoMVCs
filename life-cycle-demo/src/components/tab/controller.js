export default class TabCtrl {
  $onInit () {
    this.tab = {
      label: this.label,
      selected: false
    }

    // this.tabs === require: { tabs: '^^' }
    this.tabs.addTab(this.tab)
  }
}
