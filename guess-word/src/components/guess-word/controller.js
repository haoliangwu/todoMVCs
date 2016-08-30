import { guessService } from '../../services'

export default class GuessWord {
  constructor($scope) {
    this._scope = $scope
    guessService.login(json => {
      const {token} = json
      this.token = token
    })
  }

  $onInit() {
    this.words = []
  }

  start() {
    guessService.start(this.token, json => {
      const {sessionId, word} = json
      this.word = word
      this.sessionId = sessionId

      let count = 0

      this.guess('a')
    })
  }

  guess(char) {
    guessService.guess(this.token, this.sessionId, char, this.handleGuess.bind(this))
  }

  handleGuess(json) {
    const {word} = json
    this.word = word
    this.words.push(word)

    // if (this.word.indexOf('*') >= 0) this.guess('b', this.handleGuess)
    this.result(word)
  }

  result(word) {
    console.log(word)

    guessService.result(this.token, this.sessionId, word, str => {
      console.log(str)
      this._scope.$apply()
    })
  }
}
