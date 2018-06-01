angular.module('PartAppUI').controller('AddUserController', ['$http', '$log', '$scope', '$location', '$routeParams',
    function($http, $log, $scope ,$location, $routeParams) {
        var thisCtrl = this;
        this.ownerId = "1";//localStorage.userID;
        this.groupId = localStorage.groupID;
        this.userName = "";


        this.addUser = function(){
            //var ngroup = thisCtrl.newGroup;
            // Need to figure out who I am
            var data = {};
            data.userName = this.userName;
            data.groupId = this.groupId;
            data.ownerId = this.ownerId;
            var reqURL = "http://localhost:5000/MessageApp/groups/add";
            console.log("reqURL: " + reqURL);
            // configuration headers for HTTP request
            var config = {
                headers : {
                    'Content-Type': 'application/json;charset=utf-8;'
                     //Access-Control-Allow-Headers: Content-Type;
                     //Access-Control-Allow-Methods: GET, POST, OPTIONS;
                     //Access-Control-Allow-Origin: *
                    //'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }
            // Now issue the http request to the rest API
            $http.post(reqURL, data, config).then( function (response) {
                    $log.log("data: " + JSON.stringify(response.data));
                    // tira un mensaje en un alert
                    //alert("New user added with id: " + response.data.Part.uid);
                    $location.url('/adduser');
                }).catch(function(error){
                        console.log(error);
                        alert(error);


            });

            //thisCtrl.groupList.unshift({"first_name": author, "last_name" : lname, "message" : msg, "like" : 0, "nolike" : 0});
            //thisCtrl.newGroup = "";
        };


}]);



