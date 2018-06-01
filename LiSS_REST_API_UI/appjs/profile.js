angular.module('AppChat').controller('ProfileController', ['$http', '$log', '$scope', '$location', '$routeParams',
    function($http, $log, $scope ,$location, $routeParams) {
        var thisCtrl = this;

        this.profileList = [];
        this.userId = localStorage.userID;

        this.loadProfile = function() {

            //var url = "http://127.0.0.1:5000/MessageApp/user/profile/1";
            var url = "http://127.0.0.1:5000/MessageApp/user/profile/" + this.userId;

            $http.get(url).then(function (response) {

                $log.log("Profile Loaded: ", response.data);
                var users = response.data;

                for (u in users) {
                    user = users[u];
                    thisCtrl.profileList.push({
                        "username":user['username'],
                        "fName":user['fName'],
                        "lName":user['lName'],
                        "email":user['email'],
                        "phone":user['phone']
                    });
                };
            });
        };
        this.loadProfile();
    }]);