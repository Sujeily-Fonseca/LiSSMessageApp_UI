angular.module('AppChat').controller('LogInController', ['$http', '$log', '$scope', '$location', '$routeParams',
    function($http, $log, $scope, $location, $routeParams) {
        // This variable lets you access this controller
        // from within the callbacks of the $http object
        var thisCtrl = this;
        this.loginList = [];
        this.username = "";
        this.password = "";

        this.login = function(){
            // Build the data object
            var data = {};
            data.username = this.username;
            data.password = this.password;

            // Now create the url with the route to talk with the rest API
            var reqURL = "http://localhost:5000/MessageApp/Auth/login";
            console.log("reqURL: " + reqURL);

            // configuration headers for HTTP request
            var config = {
                headers : {
                    'Content-Type': 'application/json;charset=utf-8;'
                    //'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'

                }
            }
            // Now issue the http request to the rest API

            $http.post(reqURL, data, config).then( function (response) {
                    var logged = data['data']['userId'];
                    $log.log("Log info:", logged);

                    for (u in logged) {
                    logs = logged[g];
                    thisCtrl.loginList.push({
                        "userId":logs['userID']
                    });
                };

                    $log.log(logs['userID']);
                    $location.url('/group');

                    if(typeof(Storage) !== "undefined") {
                        localStorage.setItem("userID", userID);
                    }


                }).catch(function(error){
                        console.log(error);
                        alert(error);
            });
        };

}]);