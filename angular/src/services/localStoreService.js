import errorHandler from './errorHandler'

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
    if (query.length === 0) return errorHandler.getErrorInfo(0)

    if (this.items.some(e => query === e.text)) return errorHandler.getErrorInfo(1)

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
