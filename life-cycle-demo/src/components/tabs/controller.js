export default class TabsCtrl {
  $onInit () {
    this.tabs = []
  }

  addTab (tab) {
    this.tabs.push(tab)
  }

  selectTab (index) {
    for (var i = 0; i < this.tabs.length; i++) {
      this.tabs[i].selected = false
    }
    this.tabs[index].selected = true
  }
}
