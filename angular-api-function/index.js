angular.module('app', [])
  .controller('Controller', function () {
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

    // extend
    this._extends = [
      angular.extend({foo: '1'}, {bar: '2'}),
      angular.extend({}, {foo: '1'}, {bar: '2'})
    ]

    // forEach
    this._forEach1 = []
    this._forEach2 = []

    angular.forEach({foo: 1, bar: 2}, function (v, k) {
      this.push(k + ':' + v)
    }, this._forEach1)

    angular.forEach(['a', 'b', 'c'], function (v, k) {
      this.push(k + ':' + v)
    }, this._forEach2)

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

    // identity
    this.Fn1 = function (input) {
      return input
    }
    this._identity = function (fn, input) {
      return (fn || angular.identity)(input)
    }

    // is****
    this._isArray = angular.isArray([])
    this._isDate = angular.isDate(new Date())
    this._isDefined = angular.isDefined({})
    this._isElement = angular.isElement(document.body)
    this._isFunction = angular.isFunction(this.Fn)
    this._isNumber = angular.isNumber(1)
    this._isObject = angular.isObject({})
    this._isString = angular.isString('foo')
    this._isUndefined = angular.isUndefined(undefined)

    // merge
    this._merge = [
      angular.merge({foo: '1'}, {foo: '2', bar: '1'}),
      angular.merge({}, {foo: '1'}, {foo: '2', bar: '1'})
    ]
  })
