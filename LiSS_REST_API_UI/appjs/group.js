angular.module('AppChat').controller('GroupController', ['$http', '$log', '$scope',
    function($http, $log, $scope) {
        var thisCtrl = this;

        this.groupList = [];
        this.newGroup = "";

        this.loadGroups = function(){

            var url = "http://127.0.0.1:5000//MessageApp/users/groups/1";

             $http.get(url).then( function(data){
                // Get the messages from the server through the rest api
                $log.log("Group Loaded: ", data["data"]["Messages"]);
                messages = data["data"]["Messages"];
                messages.forEach(function(part, index, arr){
                    var url_reactions = "http://127.0.0.1:5000/MessageApp/reactions?msgId=" + arr[index]["msgID"];
                    $http.get(url_reactions).then(function(response) {

                        reactions = response.data;
                        msg = {
                            "groupID": arr[index]["groupID"],
                            "group_name": arr[index]["groupName"],
                        }
                        thisCtrl.groupList.push(msg);
                    });
                })
            });
        };

        function getReactionsFor(msgID){
            var url_reactions = "http://127.0.0.1:5000/MessageApp/reactions?msgId=" + msgID;
             $log.log("MsgID", message["msgID"]);

            $http.get(url_reactions).then(function(response){
                $log.log("Reactions Loaded: ", response.data);
                $log.log("MsgID", message["msgID"]);
                reactions = response.data;
                message = thisCtrl.messageList.find(function(element){
                    return element["msgID"] == msgID;
                    }
                );
                message.likes = reactions['Reactions']['likes']['count'];
                message.dislikes = reactions['Reactions']['dislikes']['count'];
            });
        };

        this.postMsg = function(){
            var msg = thisCtrl.newText;
            // Need to figure out who I am
            var author = "Sujeily";
            var lname = "Fonseca"

            thisCtrl.messageList.unshift({"first_name": author, "last_name" : lname, "message" : msg, "like" : 0, "nolike" : 0});
            thisCtrl.newText = "";
        };

        this.loadMessages();
}]);
