angular.module('app', [])
  .controller('Controller', ['$scope', function ($scope) {
    $scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    }
    $scope.format = 'M/d/yy h:mm:ss a'
    $scope.name = 'Tobias'
  }])
  .directive('myCustomerOne', function () {
    return {
      template: 'customer1: {{customer.name}} {{customer.address}}'
    }
  })
  .directive('myCustomerTwo', function () {
    return {
      restrict: 'E',
      scope: {
        customer: '='
      },
      template: 'customer2: {{customer.name}} {{customer.address}}'
    }
  })
  .directive('myCurrentTime', ['$interval', 'dateFilter', function ($interval, dateFilter) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var format, timeoutId
        function updateTime () {
          element.text(dateFilter(new Date(), format))
        }

        scope.$watch(attrs.format, function (value) {
          format = value
          updateTime()
        })

        element.on('$destroy', function () {
          $interval.cancel(timeoutId)
        })

        timeoutId = $interval(function () {
          updateTime()
        }, 1000)
      }
    }
  }])
  .directive('myDialog', function () {
    return {
      restrict: 'E',
      // 则transclude使用的是当前元素的父级scope, 如果不是隔离scope, link函数中的scope会改变父级scope中的name的值
      transclude: true,
      scope: {},
      template: '<div ng-transclude></div>',
      link: function (scope) {
        scope.name = 'Jeff'
      }
    }
  })
