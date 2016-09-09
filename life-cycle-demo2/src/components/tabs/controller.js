export default class TabsCtrl {
  $onInit () {
    this.tabs = []
  }

  $onChanges (changes) {
    if (changes.selected.isFirstChange) return
    // `changes` is a special instance of a constructor Object,
    // it contains a hash of a change Object and
    // also contains a function called `isFirstChange()`
    // it's implemented in the source code using a constructor Object
    // and prototype method to create the function `isFirstChange()`
    // this.selected = changes
    this.selectTab(changes.selected.currentValue || 0)
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

  $postLink () {
    // use `this.selected` passed down from bindings: {}
    // a safer option would be to parseInt(this.selected, 10)
    // to coerce to a Number to lookup the Array index, however
    // this works just fine for the demo :)
    this.selectTab(this.selected || 0)
  }
}
