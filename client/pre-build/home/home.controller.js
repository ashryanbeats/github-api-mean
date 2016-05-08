app.controller('HomeController', function($scope, $http, HomeFactory) {

	$scope.getData = function () {
		$http.get("/api/auth")
			.then(function(data) {
				console.log(data);
			})
	}

});