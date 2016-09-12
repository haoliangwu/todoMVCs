export default class HelloCtrl {
  constructor () {
    this.greeting = 'hello'
  }

  toggleGreeting () {
    this.greeting = (this.greeting === 'hello') ? 'whats up' : 'hello'
  }
}
