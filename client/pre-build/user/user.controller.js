app.controller('UserController', function($scope, $http, UserFactory) {

	$scope.getUserData = function() {
		UserFactory.getUserData()
			.then(function(data) {
				console.log(data);
			});
	}

});