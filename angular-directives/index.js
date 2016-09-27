angular.module('app', [])
  .controller('Controller', function () {
    this._input = 'i am input'
    this._checkbox = 'YES'
    this._date = new Date(2013, 5, 14, 12, 30, 0)
    this._email = 'a@b.c'
    this._number = 514
    this._radio = 'Foo'
    this._range = 50
    this._text = 'abc'
    this._url = 'http://google.com'
  })
