app.factory('UserFactory', function($http) {
	return {
		getUserData: getUserData
	};

	function getUserData(access_token) {

		return $http.get('/api/github/user?access_token=' + access_token)
			.then(function(res) {
				return res.data;
			});
	}

});