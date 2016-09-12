import angular from 'angular'

import './main.css'

angular
  .module('helloworld', ['ui.router'])
  .config(function ($stateProvider) {
    // hello
    $stateProvider.state({
      name: 'hello',
      url: '/hello',
      template: '<h3>hello world</h3>'
    })
    // about
    $stateProvider.state({
      name: 'about',
      url: '/about',
      template: '<h3>its the ui-router hello world app !!</h3>'
    })
  })

if (module.hot) module.hot.accept()
