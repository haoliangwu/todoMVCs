export default {
  items: [],

  getItems() {
    return this.items
  },

  addItem(item) {
    return this.items.push(item)
  }
}
