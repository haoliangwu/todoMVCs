import { localStoreService } from '../../services'

export default class TodoController {
  constructor () {
    this.query = ''
    this.name = 'TodoMVC'
    this.placeholder = 'add todo..'
  }

  handleChange () {
    localStoreService.setProps({query: this.query})
  }

  addToDoItem (query) {
    localStoreService.addItem(query)

    // reset query str
    this.query = ''
    localStoreService.setProps({query: this.query})
  }
}
