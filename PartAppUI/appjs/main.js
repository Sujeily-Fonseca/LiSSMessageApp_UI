(function() {

    var app = angular.module('PartAppUI',['ngRoute']);

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when('/parts', {
            templateUrl: 'pages/parts.html',
            controller: 'PartsController',
            controllerAs : 'partsCtrl'
        }).when('/partsdetails/:pid', {
            templateUrl: 'pages/partdetails.html',
            controller: 'PartsDetailController',
            controllerAs : 'partsDetailCtrl'
        }).when('/login', {
            templateUrl: 'pages/login.html',
            controller: 'LogInController',
            controllerAs : 'LogInCtrl'
        }).when('/register', {
            templateUrl: 'pages/register.html',
            controller: 'RegisterController',
            controllerAs : 'RegisterCtrl'
        }).when('/profile', {
            templateUrl: 'pages/profile.html',
            controller: 'ProfileController',
            controllerAs : 'ProfileCtrl'
        }).when('/chat', {
            templateUrl: 'pages/chat.html',
            controller: 'ChatController',
            controllerAs : 'chatCtrl'
        }).when('/group', {
            templateUrl: 'pages/group.html',
            controller: 'GroupController',
            controllerAs : 'groupCtrl'
        }).when('/hashtags', {
            templateUrl: 'pages/hashtags.html',
            controller: 'HashtagsController',
            controllerAs : 'hashtagsCtrl'
        }).when('/adduser', {
            templateUrl: 'pages/adduser.html',
            controller: 'AddUserController',
            controllerAs : 'adduserCtrl'
        }).otherwise({
            redirectTo: '/chat'
        });
    }]);
})();
