import { localStoreService } from '../../services'

export default class TodoController {
  constructor () {
    this.query = ''
  }

  reset () {
    this.err = ''
    this.query = ''
    localStoreService.setProps({query: ''})
  }

  handleChange () {
    this.err = ''
    localStoreService.setProps({query: this.query})
  }

  addToDoItem (query) {
    const err = localStoreService.addItem(query)

    if (err) this.err = err
    else this.reset()
  }
}
