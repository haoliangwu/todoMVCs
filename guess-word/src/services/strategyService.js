export default {
  loop: function () {
    const index = this.count++

    return this.source[index]
  },

  reverse: function () {
    const index = this.source.length - this.count - 1
    this.count++

    return this.source[index]
  },

  squeeze: function () {
    const index = this.count % 2 === 0 ? Math.floor(this.count / 2) : this.source.length - Math.floor(this.count / 2) - 1
    this.count++

    return this.source[index]
  },

  random: function () {
    const index = Math.floor(Math.random() * this.source.length)
    this.count++

    return this.source.splice(index, 1)[0]
  },

  _init: function () {
    this.count = 0
    this.source = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  }
}
