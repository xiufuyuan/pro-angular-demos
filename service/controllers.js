angular.module('exampleControllers', []).controller("defaultCtrl", function ($scope, logService, debugService) {
  $scope.data = {
    cities: ["London", "New York", "Paris"],
    totalClicks: 0
  };
  $scope.$watch('data.totalClicks', function (newVal) {
    debugService.log("Total click count: " + newVal);
  });
});