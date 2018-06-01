angular.module('AppChat').controller('ContactsController', ['$http', '$log', '$scope', '$location', '$routeParams',
    function($http, $log,$scope, $location, $routeParams) {
        var thisCtrl = this;
        var phone ="";
        this.contactList = [];
       this.userId = localStorage.userID;
        //this.userID = localStorage.getItem("UID")
        //localStorage.removeItem("UID")

        this.loadContacts = function(){
            //var userId = this.userId;
            var url_contacts = "http://127.0.0.1:5000/MessageApp/contacts/" + this.userId;
           //$log.log("MsgID", message["msgID"]);

          $http.get(url_contacts).then(function(data){
              contacts = data['data']['Contacts'];
              $log.log("Contacts Loaded: ", contacts);
              for (c in contacts) {
                  contact = contacts[c];
                  $log.log(contact[c]);
                  thisCtrl.contactList.push({
                      "fName":contact['fName'],
                      "lName":contact['lName'],
                      "phone":contact['phone'],
                      "userName":contact['userName'],
                  });
                   // $log.log(participant['userName']);
              };

          });
        };

        this.addContact = function(){
            //var ngroup = thisCtrl.newGroup;
//            // Need to figure out who I am
//            if (!this.isValidPhone(this.phone)) {
//                console.log("Invalid characters in phone number");
//                return;
//            }
            $log.log("CONTACT.")
            var data = {};
            data.phone = this.phone;

            var reqURL = "http://localhost:5000/MessageApp/contacts/" + this.userId;
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
                    $location.path('/contacts');
                }).catch(function(error){
                        console.log(error);
                        alert(error);


            });

            //thisCtrl.groupList.unshift({"first_name": author, "last_name" : lname, "message" : msg, "like" : 0, "nolike" : 0});
            //thisCtrl.newGroup = "";
        };

        this.loadContacts();
}]);
