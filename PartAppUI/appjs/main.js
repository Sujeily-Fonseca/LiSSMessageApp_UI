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
        }).otherwise({
            redirectTo: '/login'
        });
    }]);
})();
