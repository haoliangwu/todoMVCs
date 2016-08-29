import { guessService } from '../../services'

export default class TodoItem {
  constructor() {
    this.words = []
  }

  start() {
    guessService.login((json) => {
      const {token} = json
      guessService.start(token, (json) => {
        console.log(json)
      })
    })
  }
}
