(function() {

    var app = angular.module('AppChat',['ngRoute']);

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider, $location) {
        $routeProvider.when('/login', {
            templateUrl: 'pages/login.html',
            controller: 'LogInController',
            controllerAs : 'LogInCtrl'
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
        }).when('/register', {
            templateUrl: 'pages/register.html',
            controller: 'RegisterController',
            controllerAs : 'RegisterCtrl'
        }).when('/hashtags', {
            templateUrl: 'pages/hashtags.html',
            controller: 'HashtagsController',
            controllerAs : 'hashtagsCtrl'
        }).otherwise({
            redirectTo: '/login'
        });
    }]);
})();
