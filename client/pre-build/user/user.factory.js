app.factory('UserFactory', function($http) {
	return {
		getUserData: getUserData,
		getUserRepos: getUserRepos,
		getUserCommits: getUserCommits
	};

	function getUserData(access_token) {

		return $http.get('/api/github/user?access_token=' + access_token)
			.then(function(res) {
				return res.data;
			});
	}

	function getUserRepos(access_token, repos_url) {

		return $http.get('/api/github/user/repos?access_token=' + access_token + "&repos_url=" + repos_url)
			.then(function(res) {
				return res.data;
			});
	}

	function getUserCommits(access_token, username) {

		return $http.get('/api/github/user/commits?access_token' + access_token + "&username=" + username)
			.then(function(res) {
				return res.data;
			});
	}

});