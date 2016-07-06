/**
 * Created by zg on 2016/7/5.
 */
angular.module('exampleDirectives', []).directive('triButton', function () {
  return {
    scope: {
      counter: '=counter'
    },
    link: function (scope, element, attrs) {
      element.on('click', function (event) {
        console.log("Button click: " + event.target.innerText);
        scope.$apply(function () {
          scope.counter++;
        });
      });
    }
  }
})
  .directive('evalExpression', function ($parse) {
    return function (scope, element, attrs) {
      scope.$watch(attrs['evalExpression'], function (newValue) {
        var result = undefined;
        try {
          var fn = $parse(scope.expr);
          result = fn(scope);
          if (result == undefined) {
            result = 'No result';
          }
        } catch (err) {
          result = 'Cannot evaluate expression';
        }
        element.text(result);
      })
    };
  })
  .directive('interpolate', function ($interpolate) {
    var fn = $interpolate('The total is: {{total | currency}} (including tax)');
    return {
      scope: {
        amount: '=amount',
        tax: '=tax'
      },
      link: function (scope, elemnt, attrs) {
        scope.$watch('amount', function (newValue) {
          var localData = {
            total: +newValue + (+newValue * (+scope.tax / 100))
          };
          scope.total = localData.total;
          elemnt.text(fn(scope));
        })
      }
    };
  })
  .directive('compileDirective', function ($compile) {
    return function (scope, element, attrs) {
      var content = '<ul><li ng-repeat="city in data.cities">{{city}}</li></ul>';
      var listElem = angular.element(content);
      var compileFn = $compile(listElem);
      compileFn(scope);
      element.append(listElem);
    };
  });