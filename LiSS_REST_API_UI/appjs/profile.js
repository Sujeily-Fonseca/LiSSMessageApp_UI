angular.module('AppChat').controller('ProfileController', ['$http', '$log', '$scope', '$location', '$routeParams',
    function($http, $log, $scope ,$location, $routeParams) {
        var thisCtrl = this;

        this.profileList = [];
        this.userId = "";

        this.loadProfile = function() {

            var url = "http://127.0.0.1:5000/MessageApp/groups/user/1";

            $http.get(url).then(function (data) {

                $log.log("Profile Loaded: ", data['data']['User']);
                var groups = data['data']['User'];

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
    }]);