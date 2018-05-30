angular.module('AppChat').controller('GroupController', ['$http', '$log', '$scope',
    function($http, $log, $scope) {
        var thisCtrl = this;

        this.groupList = [];
        this.newGroup = "";

        this.loadGroups = function() {

            var url = "http://127.0.0.1:5000/MessageApp/groups/user/1";

            $http.get(url).then(function (data) {

                $log.log("Group Loaded: ", data['data']['Groups']);
                var groups = data['data']['Groups'];

                for (g in groups) {
                    group = groups[g];
                    thisCtrl.groupList.push({
                        "groupID":group['groupID'],
                        "group_name":group['groupName']
                    });
                };
            });
        };

        this.postGroup = function(){
            var ngroup = thisCtrl.newGroup;
            // Need to figure out who I am
            var author = "Sujeily";
            var lname = "Fonseca"

            //thisCtrl.groupList.unshift({"first_name": author, "last_name" : lname, "message" : msg, "like" : 0, "nolike" : 0});
            //thisCtrl.newGroup = "";
        };

        this.loadGroups();
}]);
