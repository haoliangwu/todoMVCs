export default {
  props: {},
  items: [],

  getProps() {
    return this.props
  },

  setProps(nextProps) {
    this.props = Object.assign(this.props, nextProps)
  },

  getItems() {
    return this.items
  },

  addItem(query) {
    this.items.push(
      {
        index: this.items.length,
        text: query,
        status: false
      }
    )
  },

  toggleItem(index) {
    this.items[index].status = !this.items[index].status
  },

  cleanItems() {
    this.items.splice(0, this.items.length)
  },

  removeItem(index) {
    this.items.splice(index, 1)
  }
}
