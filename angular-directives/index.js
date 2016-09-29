angular.module('app', ['ngSanitize'])
  .controller('Controller', ['$scope', function ($scope) {
    this._cb = function (e) {
      console.log(e + ' event triggers.')
    }

    this._input = 'i am input'
    this._checkbox = 'YES'
    this._date = new Date(2013, 5, 14, 12, 30, 0)
    this._email = 'a@b.c'
    this._number = 514
    this._radio = 'Foo'
    this._range = 50
    this._text = 'abc'
    this._url = 'http://google.com'

    this._ngBind = 'ngBind'
    this._ngBindHtml = '<a href="#">ngBindHtml</a>'
    this._ngBindTemplate = 'ngBindTemplate'
    this._ngChecked = true
    this._ngClass = 'red'
    this._ngClassEven = 'red'
    this._ngClassOdd = 'blue'
    this._ngHide = false
    this._ngHref = 'www.google.com'
    this._ngIf = true
    this._ngList = []
    this._ngModelOptions = 'ngModelOptions'
    this._cancel = function (e) {
      // Esc keycode is 27
      if (e.keyCode === 27) {
        $scope.myForm1._ngModelOpts.$rollbackViewValue()
      }
    }
    this._ngNonBindable = 'ngNonBindable'
    this._ngRequired = ''
    this._ngShow = !this._ngHide
    this._ngSwitch = 'other'
  }])
