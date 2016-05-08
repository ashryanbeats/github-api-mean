app.config(function($stateProvider) {
    $stateProvider.state('user', {
        url: '/user',
        templateUrl: '/pre-build/user/user.html',
        controller: 'UserController'
    });
});