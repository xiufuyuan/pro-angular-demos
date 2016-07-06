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
});