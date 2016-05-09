app.controller('UserController', function($scope, $http, $cookies, UserFactory) {

	$scope.getUserData = function() {
		let access_token = $cookies.get('access_token');

		if (access_token) {
			UserFactory.getUserData(access_token)
				.then(function(data) {
					$scope.name = data.name;
					$scope.company = data.company;
				});
		}
		else {
			$scope.name = "Log into GitHub first";
		}
	}

});