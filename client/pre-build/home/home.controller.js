app.controller('HomeController', function($scope, $http, HomeFactory, $cookies, $state) {

	$scope.access_token = $cookies.get('access_token');
	$scope.loggedIn = $scope.access_token ? true : false;

	$scope.logOut = function () {
		$cookies.remove('access_token');
		$state.reload();
	}


	$scope.getData = function () {
		$http.get("/api/auth")
			.then(function(data) {
				console.log(data);
			})
	}

});