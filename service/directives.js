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
    }
  });