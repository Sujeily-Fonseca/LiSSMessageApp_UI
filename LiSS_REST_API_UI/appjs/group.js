angular.module('AppChat').controller('GroupController', ['$http', '$log', '$scope', '$location', '$routeParams',
    function($http, $log, $scope ,$location, $routeParams) {
        var thisCtrl = this;

        this.userID = localStorage.userID;
        this.groupList = [];
        this.newGroup = "";
        this.ownerId = "";
        this.groupId = "";

        this.loadGroups = function() {

            var url = "http://127.0.0.1:5000/MessageApp/groups/user/" + userID;

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
            var data = {};
            data.newGroup = this.newGroup;
            data.userId = 1 + "";
            data.ownerId = 1 + "";
            var reqURL = "http://localhost:5000/MessageApp/MessageApp/groups";
            console.log("reqURL: " + reqURL);
            // configuration headers for HTTP request
            var config = {
                headers : {
                    'Content-Type': 'application/json;charset=utf-8;'
                }
            }
            
            // Now issue the http request to the rest API
            $http.post(reqURL, data, config).then( function (response) {
                $log.log("data: " + JSON.stringify(response.data));
                //alert("New user added with id: " + response.data.Part.uid);
                $location.url('/group');
            }).catch(function(error){
                    console.log(error);
                    alert(error);

            });
        };

        this.saveGroupId = function(groupID){
            $log.log(groupID);
                if(typeof(Storage) !== "undefined"){
                    localStorage.setItem("groupID", groupID);
            }
    
        }


        this.loadGroups();
}]);



