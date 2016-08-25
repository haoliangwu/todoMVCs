import { localStoreService } from '../../services'

export default class TodoItem {
  constructor () {
    this.items = localStoreService.getItems()
  }
}
