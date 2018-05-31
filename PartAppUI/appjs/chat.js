angular.module('PartAppUI').controller('ChatController', ['$http', '$log', '$scope', '$location', '$routeParams',
    function($http, $log,$scope, $location, $routeParams) {
        var thisCtrl = this;

        this.messageList = [];
        this.newText = "";
        this.hashString="";


        var userId = "";
        this.groupId = localStorage.groupID;
        $log.log("Este soy yooo!", this.groupId);
        var replyValue = "False";
        var replyId = "";
        //this.userID = localStorage.getItem("UID")
        //localStorage.removeItem("UID")

        this.loadMessages = function(){

            var url = "http://127.0.0.1:5000/MessageApp/messages/groups/1";

             $http.get(url).then( function(data){
                // Get the messages from the server through the rest api
                $log.log("Message Loaded: ", data["data"]["Messages"]);
                messages = data["data"]["Messages"];
                messages.forEach(function(part, index, arr){
                    var url_reactions = "http://127.0.0.1:5000/MessageApp/reactions?msgId=" + arr[index]["msgID"];
                    $http.get(url_reactions).then(function(response) {

                        reactions = response.data;
                        msg = {
                            "msgID": arr[index]["msgID"],
                            "message": arr[index]["message"],
                            "userID": arr[index]["userID"],
                            "first_name": arr[index]["fName"],
                            "last_name": arr[index]["lName"],
                            "likes": reactions['Reactions']['likes']['count'],
                            "dislikes": reactions['Reactions']['dislikes']['count']
                        }
                        thisCtrl.messageList.push(msg);
                    });
                })
                // for(m in messages){
                //     message = messages[m];
                //
                //     var url_reactions = "http://127.0.0.1:5000/MessageApp/reactions?msgId=" + message["msgID"];
                //      $log.log("MsgID", message["msgID"]);
                //
                //     $http.get(url_reactions).then(function(response) {
                //         var mes = message;
                //         $log.log("Reactions Loaded: ", response.data);
                //         $log.log("MsgID", message["msgID"]);
                //         reactions = response.data;
                //         msg = {
                //             "msgID": mes["msgID"],
                //             "message": mes["message"],
                //             "userID": mes["userID"],
                //             "first_name": mes["fName"],
                //             "last_name": mes["lName"],
                //             "likes": reactions['Reactions']['likes']['count'],
                //             "dislikes": reactions['Reactions']['dislikes']['count']
                //         }
                //         thisCtrl.messageList.push(msg);
                //     });
                // };
            });
        };

        this.loadMessages = function(){

            var url = "http://127.0.0.1:5000/MessageApp/messages/groups/1";

             $http.get(url).then( function(data){
                // Get the messages from the server through the rest api
                $log.log("Message Loaded: ", data["data"]["Messages"]);
                messages = data["data"]["Messages"];
                messages.forEach(function(part, index, arr){
                    var url_reactions = "http://127.0.0.1:5000/MessageApp/reactions?msgId=" + arr[index]["msgID"];
                    $http.get(url_reactions).then(function(response) {

                        reactions = response.data;
                        msg = {
                            "msgID": arr[index]["msgID"],
                            "message": arr[index]["message"],
                            "userID": arr[index]["userID"],
                            "first_name": arr[index]["fName"],
                            "last_name": arr[index]["lName"],
                            "likes": reactions['Reactions']['likes']['count'],
                            "dislikes": reactions['Reactions']['dislikes']['count']
                        }
                        thisCtrl.messageList.push(msg);
                    });
                })
                // for(m in messages){
                //     message = messages[m];
                //
                //     var url_reactions = "http://127.0.0.1:5000/MessageApp/reactions?msgId=" + message["msgID"];
                //      $log.log("MsgID", message["msgID"]);
                //
                //     $http.get(url_reactions).then(function(response) {
                //         var mes = message;
                //         $log.log("Reactions Loaded: ", response.data);
                //         $log.log("MsgID", message["msgID"]);
                //         reactions = response.data;
                //         msg = {
                //             "msgID": mes["msgID"],
                //             "message": mes["message"],
                //             "userID": mes["userID"],
                //             "first_name": mes["fName"],
                //             "last_name": mes["lName"],
                //             "likes": reactions['Reactions']['likes']['count'],
                //             "dislikes": reactions['Reactions']['dislikes']['count']
                //         }
                //         thisCtrl.messageList.push(msg);
                //     });
                // };
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

        this.getParticipantsFor(groupID){
              var url_reactions = "http://127.0.0.1:5000/MessageApp/reactions?msgId=" + groupID;
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
            var data = {};
            //data.userId = 1+"";//this.userID;
            //data.groupId = 1+"";//this.groupId;
            data.newText = this.newText;
            data.replyValue = "False";
            data.replyId = 1+"";

            $log.log("Message: ", this.newText)

            var reqURL = "http://localhost:5000/MessageApp/messages/groups/1/user/1"
            console.log("reqURL: " + reqURL)

            var config = {
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }

            $http.post(reqURL, data, config).then(function (response){
                console.log("data: " + JSON.stringify(response.data));
                alert("New message sent msgId: " + response.data.Message.msgId);
            }).catch(function(error){
                console.log(error);
                alert(error);
            });

            //var msg = thisCtrl.newText;
            // Need to figure out who I am
            //var author = "Sujeily";
            //var lname = "Fonseca"

            //thisCtrl.messageLi st.unshift({"first_name": author, "last_name" : lname, "message" : msg, "like" : 0, "nolike" : 0});
            //thisCtrl.newText = "";
        };


        this.savehashString = function(){
            if(typeof(Storage) !== "undefined"){
                $log.log("ENTRE EN SAVE");
                localStorage.setItem("hashString", this.hashString);
            }
        }
        this.loadMessages();
}]);
