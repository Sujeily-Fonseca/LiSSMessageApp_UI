(function() {

    var app = angular.module('AppChat',['ngRoute']);

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider, $location) {
        $routeProvider.when('/login', {
            templateUrl: 'login.html',
            controller: 'LoginController',
            controllerAs : 'loginCtrl'
        }).when('/group', {
            templateUrl: 'pages/group.html',
            controller: 'GroupController',
            controllerAs : 'groupCtrl'
        }).otherwise({
            //redirectTo: '/chat'
        });
//        .when('/chat', {
//            templateUrl: 'pages/chat.html',
//            controller: 'ChatController',
//            controllerAs : 'chatCtrl'
//         })
    }]);

})();
