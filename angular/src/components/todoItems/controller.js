import { localStoreService } from '../../services'

export default class TodoItem {
  constructor () {
    this.items = localStoreService.getItems()
    this.props = localStoreService.getProps()
  }

  toggle (index) {
    localStoreService.toggleItem(index)
  }

  delete (index) {
    localStoreService.removeItem(index)
  }

  clear () {
    localStoreService.cleanItems()
  }
}
