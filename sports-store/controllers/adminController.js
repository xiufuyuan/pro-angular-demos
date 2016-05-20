angular.module('sportsStoreAdmin')
.controller('authCtrl', function ($scope, $location) {

	$scope.authenticate = function (user, pass) {

		if (user === 'xiufu' && pass === '111111') {
			$location.path('/main');
		} else {
			$scope.authenticationError = { status: 401 };
		}
	}
})
.controller('mainCtrl', function ($scope) {

	$scope.screens = ['Products', 'Orders'];
	$scope.current = $scope.screens[0];

	$scope.setScreen = function (index) {
		$scope.current = $scope.screens[index];
	}

	$scope.getScreen = function () {
		/*return $scope.current == $scope.screens[0]
			? '/sports-store/views/adminProducts.html'
			: '/sports-store/views/adminOrders.html'*/
		return '/sports-store/views/admin' + $scope.current + '.html';
	}

})
.controller('ordersCtrl', function ($scope) {

	$scope.orders = [
		{
			name: 'xiufu',
			street: 'asdfadfasf',
			city: 'changsha',
			state: 'aasaD',
			zip: 'asdfasdf',
			country: 'asdfas',
			giftwrap: true,
			products: [
				{"name":"Kayak", "price":275, "id":"05af70919155f8fc", count: 1},
				{"name":"Lifejacket", "price":48.95, "id":"3d31d81b218c98ef", count: 2},
				{"name":"Soccer Ball", "price":19.5, "id":"437615faf1d38815", count: 3},
				{"name":"Corner Flags", "price":34.95, "id":"93c9cc08ac2f28d4", count: 2}
			]
		},
		{
			name: 'longer',
			street: 'sdf',
			city: 'gasdf',
			state: 'awqer',
			zip: 'sdfa',
			country: 'hdfg',
			giftwrap: false,
			products: [
				{"name":"Lifejacket", "price":48.95, "id":"3d31d81b218c98ef", count: 5},
				{"name":"Soccer Ball", "price":19.5, "id":"437615faf1d38815", count: 3},
				{"name":"Corner Flags", "price":34.95, "id":"93c9cc08ac2f28d4", count: 10}
			]
		}
	];

	$scope.selectedOrder;

	$scope.selectOrder = function (order) {
		$scope.selectedOrder = order;
	}

	$scope.calcTotal = function (order) {
		var total = 0;
		angular.forEach(order.products, function (item) {
			total += item.count * item.price; 
		});
		return total;
	}

})