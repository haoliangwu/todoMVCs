import { guessService, strategyService } from '../../services'

export default class GuessWord {
  constructor ($scope) {
    this._scope = $scope
    guessService.login(json => {
      const {token} = json
      this.token = token
    })
  }
  // lifecycle
  $onInit () {
    this.algorithm = 'random'
    this.algOptions = [{
      id: 'random',
      title: 'random'
    }, {
      id: 'loop',
      title: 'loop'
    }, {
      id: 'squeeze',
      title: 'squeeze'
    }, {
      id: 'reverse',
      title: 'reverse'
    }]
    this.result = ''
    this.words = []
  }

  // service proxy
  start () {
    this.reset()

    this.result = 'I am guesssing, wait a minute..'

    guessService.start(this.token, json => {
      const {sessionId, word} = json
      this.word = word
      this.sessionId = sessionId
      this.guess(this.strategy())
    })
  }

  guess (char) {
    console.log(char)
    guessService.guess(this.token, this.sessionId, char, this.handleGuess.bind(this))
  }

  handleGuess (json) {
    const {word} = json

    this.word = this.merge(this.word, word)
    this.words.push({ count: strategyService.count, text: word })

    if (this.word.indexOf('*') >= 0) this.guess(this.strategy())
    else {
      this.handleResult()
    }
  }

  handleResult () {
    guessService.result(this.token, this.sessionId, this.word, str => {
      this.result = `The word is '${this.word}'. ${str}.`
      this._scope.$apply()
    })
  }

  handleAlgChange () {
    console.log(`current alg is ${this.algorithm}`)
  }

  reset () {
    strategyService._init()
    this.result = 'I am guesssing, wait a minute..'
    this.words = []
    this.word = ''
  }

  // util
  strategy () {
    return strategyService[this.algorithm]()
  }

  merge (current, next) {
    let _current = current.split('')
    let _next = next.split('')

    return _current.map((c, i) => {
      return c === '*' ? _next[i] : _current[i]
    }).join('')
  }
}
