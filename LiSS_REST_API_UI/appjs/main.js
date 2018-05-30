(function() {

    var app = angular.module('AppChat',['ngRoute']);

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider, $location) {
        $routeProvider.when('/login', {
            templateUrl: 'login.html',
            controller: 'LoginController',
            controllerAs : 'loginCtrl'
        }).when('/chat', {
            templateUrl: 'pages/chat.html',
            controller: 'ChatController',
            controllerAs : 'chatCtrl'
        }).when('/group', {
            templateUrl: 'pages/group.html',
            controller: 'GroupController',
            controllerAs : 'groupCtrl'
        }).when('/profile', {
            templateUrl: 'pages/profile.html',
            controller: 'ProfileController',
            controllerAs : 'profileCtrl'
        }).otherwise({
            redirectTo: '/chat'
        });
    }]);

})();
