/**
 * Created by manuel on 5/23/18.
 */
angular.module('PartAppUI').controller('LogInController', ['$http', '$log', '$scope', '$location', '$routeParams',
    function($http, $log, $scope, $location, $routeParams) {
        // This variable lets you access this controller
        // from within the callbacks of the $http object

        var thisCtrl = this;

        // fields for a part
        // part name
        var username = "";
        // part price
        var password = "";


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
                    console.log("data: " + JSON.stringify(response.data));
                    // tira un mensaje en un alert
                    alert("New part added with id: " + response.data.Part.pid);
                    $location.url('/parts');
                }).catch(function(error){
                        console.log(error);
                        alert(error);


            });
        };

}]);