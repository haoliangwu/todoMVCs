export default {
  count: 0,
  source: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  loop: function () {
    return this.source[this.count++]
  },

  reverse: function () {
    return this.source[this.source.length - this.count++ - 1]
  }
}
