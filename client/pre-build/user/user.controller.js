app.controller('UserController', function($scope, $http, $cookies, UserFactory) {

	$scope.access_token = $cookies.get('access_token');
	$scope.loggedIn = $scope.access_token ? true : false;

	$scope.getUserData = function() {
		
		if ($scope.loggedIn) {
			UserFactory.getUserData($scope.access_token)
				.then(function(data) {
					console.log(data);
					
					$scope.name = data.name;
					$scope.username = data.login;
					$scope.company = data.company;
					$scope.repos_url = data.repos_url;
					$scope.errorMessage = "";
				});
		}
		else {
			$scope.errorMessage = "Log into GitHub first";
		}
	}

	$scope.getUserRepos = function() {

		if ($scope.loggedIn && $scope.repos_url) {
			UserFactory.getUserRepos($scope.access_token, $scope.repos_url)
				.then(function(data) {
					console.log(data);

					$scope.repos = data;
					$scope.errorMessage = "";
				});
		}
		else if ($scope.loggedIn && !$scope.repos_url) {
			$scope.errorMessage = "Get the user data first";
		}
		else {
			$scope.errorMessage = "Log into GitHub first";
		}
	}

	$scope.getUserCommits = function() {

		if ($scope.loggedIn) {
			UserFactory.getUserCommits($scope.access_token, $scope.username)
				.then(function(data) {
					console.log(data);
				});
		}
		else {
			$scope.errorMessage = "Log into GitHub first";
		}

	}

});