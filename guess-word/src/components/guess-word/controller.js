import { guessService } from '../../services'

let source = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let count = 0

export default class GuessWord {
  constructor($scope) {
    this._scope = $scope
    guessService.login(json => {
      const {token} = json
      this.token = token
    })
  }

  $onInit() {
    this.result = ''
    this.words = []
  }

  start() {
    this.result = 'I am guesssing, wait a minute..'
    guessService.start(this.token, json => {
      const {sessionId, word} = json
      this.word = word
      this.sessionId = sessionId
      this.guess(source[count++])
    })
  }

  guess(char) {
    guessService.guess(this.token, this.sessionId, char, this.handleGuess.bind(this))
  }

  handleGuess(json) {
    const {word} = json

    this.word = this.merge(this.word, word)
    this.words.push({ count, text: word })

    if (this.word.indexOf('*') >= 0 && count < source.length) this.guess(source[count++])
    else {
      this.handleResult()
    }
  }

  handleResult() {
    guessService.result(this.token, this.sessionId, this.word, str => {
      this.result = this.word
      this._scope.$apply()
    })
  }

  merge(current, next) {
    let _current = current.split('')
    let _next = next.split('')

    return _current.map((c, i) => {
      return c === '*' ? _next[i] : _current[i]
    }).join('')
  }
}
