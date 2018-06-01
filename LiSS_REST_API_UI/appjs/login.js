angular.module('AppChat').controller('LogInController', ['$http', '$log', '$scope', '$location', '$routeParams',
    function($http, $log, $scope, $location, $routeParams) {
        // This variable lets you access this controller
        // from within the callbacks of the $http object
        if(localStorage!="undefined"){
            localStorage.removeItem("userID");
            //localStorage.removeItem("groupID");

        }
        var thisCtrl = this;
        this.loginList = {};
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
                    $log.log(response);
                    var logged = response['data']['User_Logged_In']['userId'];
                    $log.log(logged)
                    $log.log("Log info:", logged);

//                    for (u in logged)
//                    {
//                        var logs = logged[u];
//                    thisCtrl.loginList.push({
//                        "userId":logs['userId']
//                    });

                    setTimeout(location.reload(), .1);
                    userId = logged;
                    //$log.log(logs['userId']);
                    $location.url('/group');

                    if(typeof(Storage) !== "undefined") {
                        localStorage.setItem("userID", userId);
                    }


                }).catch(function(error){
                        console.log(error);
                        alert(error);
            });
        };



}]);