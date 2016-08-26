import { localStoreService } from '../../services'

export default class TodoController {
  constructor () {
    this.query = ''
  }

  handleChange () {
    localStoreService.setProps({query: this.query})
  }

  addToDoItem (query) {
    localStoreService.addItem(query)

    // reset query str
    this.query = ''
    this.handleChange()
  }
}
