app.factory('UserFactory', function($http, $cookies) {
	return {
		getUserData: getUserData
	};

	function getUserData() {
		let access_token = $cookies.get('access_token');

		return $http.get('/api/github/user?access_token=' + access_token)
			.then(function(res) {
				return res.data;
			});
	}

});