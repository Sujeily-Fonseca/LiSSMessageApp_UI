angular.module('AppChat').controller('ChatController', ['$http', '$log', '$scope', '$location', '$routeParams',
    function($http, $log,$scope, $location, $routeParams) {
        var thisCtrl = this;

        this.messageList = [];
        this.newText = "";
        this.hashText = "";

        var userId = "";
        var groupId = "";
        var msgText = "";
        var replyValue = "";
        var replyId = "";

        var msgId = "";

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
                            "post_time": arr[index]["postTime"],
                            "likes": reactions['Reactions']['likes']['count'],
                            "dislikes": reactions['Reactions']['dislikes']['count'],
                            "reactions_likes": reactions['Reactions']['likes']['reactions'],
                            "reactions_dislikes": reactions['Reactions']['dislikes']['reactions']
                        }
                        $log.log("Test: ", reactions['Reactions']['dislikes']['reactions']);
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

        this.messageWithHashtags = function(){

            //var url = "http://127.0.0.1:5000/MessageApp/message/hashtag/" + parseInt(this.groupId)+"?hashString=%23" + this.hashText;
            var url = "http://127.0.0.1:5000/MessageApp/message/hashtag/1" + this.hashText;

             $http.get(url).then( function(data){
                // Get the messages from the server through the rest api
                $log.log("Message Loaded: ", data["data"]["Messages"]);
                messages = data["data"]["Messages"];
                messages.forEach(function(part, index, arr){
                    var url_reactions = "http://127.0.0.1:5000/MessageApp/reactions?msgId=" + arr[index]["msgID"]
                    $http.get(url_hash).then(function(response) {

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
        };


        this.postLike = function(){
            var data = {};
            data.lValue = 1 + "";
            data.userId = 1 + "";
            data.msgId = 1 + "";

            var reqURL = "http://localhost:5000/MessageApp/reactions"


            var config = {
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }

            $http.post(reqURL, data, config).then(function (response){
                console.log("data: " + JSON.stringify(response.data));
                //alert("New message sent msgId: " + response.data.Reactions.lId);
            }).catch(function(error){
                console.log(error);
                alert(error);
            });
        };


        this.postDislike = function(){
            var data = {};
            data.lValue = 0 + "";
            data.userId = 1 + "";
            data.msgId = 2 + "";

            $log.log("Reactions: ", this.lValue)

            var reqURL = "http://localhost:5000/MessageApp/reactions"


            var config = {
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }

            $http.post(reqURL, data, config).then(function (response){
                console.log("data: " + JSON.stringify(response.data));
                //alert("New message sent msgId: " + response.data.Reactions.lId);
            }).catch(function(error){
                console.log(error);
                alert(error);
            });
        };

        this.loadMessages();
}]);
