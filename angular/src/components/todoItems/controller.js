import { localStoreService } from '../../services'

export default class TodoItem {
  get items () {
    return localStoreService.getItems()
  }

  get props () {
    return localStoreService.getProps()
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
