import { localStoreService } from '../../services'

export default class TodoItem {
  constructor () {
    this.items = localStoreService.getItems()
    this.props = localStoreService.getProps()
  }

  delete (index) {
    localStoreService.removeItem(index)
  }

  clear () {
    localStoreService.cleanItems()
  }
}
