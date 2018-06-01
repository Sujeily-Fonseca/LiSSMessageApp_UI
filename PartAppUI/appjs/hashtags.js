angular.module('PartAppUI').controller('HashtagsController', ['$http', '$log', '$scope', '$location', '$routeParams',
    function($http, $log,$scope, $location, $routeParams) {
        var thisCtrl = this;

        this.messageList = [];
        this.hashString = localStorage.hashString;

        var userId = "";
        this.groupId = localStorage.groupID;
        $log.log("Este soy yooo!", this.groupId);
        var replyValue = "False";
        var replyId = "";
        //this.userID = localStorage.getItem("UID")
        //localStorage.removeItem("UID")

        this.loadHashtags = function(){
            $log.log(hashString);
            var hashString = this.hashString;
            var url = "http://127.0.0.1:5000/MessageApp/message/hashtag/1?hashString=%23"+ hashString;
             if(localStorage){
                localStorage.removeItem("hashString");
             }
             $http.get(url).then( function(data){
                // Get the messages from the server through the rest api
                $log.log("Message Loaded: ", data["data"]["Hashtags"]);
                messages = data["data"]["Hashtags"];
                messages.forEach(function(part, index, arr){
                    var url_reactions = "http://127.0.0.1:5000/MessageApp/reactions?msgId=" + arr[index]["msgId"];
                    $http.get(url_reactions).then(function(response) {

                        reactions = response.data;
                        msg = {
                            "msgID": arr[index]["msgId"],
                            "message": arr[index]["message"],
                            "userID": arr[index]["userId"],
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


        this.loadHashtags();
}]);
