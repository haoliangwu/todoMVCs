angular.module('app', [])
  .controller('Controller', function () {
    // toJson/fromJson
    this._toJson = [
      angular.toJson(1),
      angular.toJson(new Date()),
      angular.toJson(['a', 'b', 'c']),
      angular.toJson('abc'),
      angular.toJson(false),
      angular.toJson({a: '1', b: '2'})]

    this._fromJson = [
      angular.fromJson('1'),
      angular.fromJson('"2016-09-20T02:37:12.105Z"'),
      angular.fromJson('["a","b","c"]'),
      angular.fromJson('"abc"'),
      angular.fromJson('false'),
      angular.fromJson('{"a":"1","b":"2"}')
    ]

    // bind
    this.foo = 'foo'
    this.other = {
      foo: 'bar'
    }

    this.Fn = function () {
      return this.foo
    }

    this.newFn = angular.bind(this.other, this.Fn)

    // copy
    this.source = {a: 1, b: 2, c: {foo: 'foo', bar: 'baz'}, d: [1, 2, 3], e: new Date()}
    this.dest = {}
    this._copy = [
      angular.copy(this.source),
      angular.copy(this.source, this.dest)
    ]

    // equals
    this._equals = [
      angular.equals(1, '1'),
      angular.equals(1, 1),
      angular.equals({foo: '1'}, {foo: '1'}),
      angular.equals({foo: '1'}, {foo: 1})
    ].map(function (e, i) {
      return i + ':' + e
    })
  })
