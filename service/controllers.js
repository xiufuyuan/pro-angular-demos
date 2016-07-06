angular.module('exampleControllers', []).controller("defaultCtrl",
function (
  $scope,
  $window,
  $document,
  $location,
  $anchorScroll,
  logService,
  debugService)
{
  $scope.price = '100.23';

  $scope.data = {
    cities: ["London", "New York", "Paris"],
    totalClicks: 0
  };

  $scope.$watch('data.totalClicks', function (newVal) {
    debugService.log("Total click count: " + newVal);
  });

  $scope.alert = function (msg) {
    //$window.alert(msg);
    console.log($document.find('button').length);
    console.log('absUrl: ', $location.absUrl());
    console.log('hash: ', $location.hash());
    console.log('host: ', $location.host());
    console.log('path: ', $location.path());
    console.log('port: ', $location.port());
    console.log('protocol: ', $location.protocol());
    console.log('search: ', $location.search());
    console.log('url', $location.url());
  };

  $scope.itemCount = 50;
  $scope.items = [];

  for (var i = 0; i < $scope.itemCount; i++) {
    $scope.items.push('Item ' + i);
  }

  $scope.show = function (id) {
    $location.hash(id);
    $anchorScroll();
  };
});