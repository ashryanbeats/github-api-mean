app.factory('HomeFactory', function($http) {
  return {
    getGitHubToken: function() {
      return $http.get('https://github.com/login/oauth/authorize?scope=user:email&client_id=5785ae4a8a58fa8e8837');    
    }
  };
});