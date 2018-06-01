angular.module('AppChat').controller('ContactsController', ['$http', '$log', '$scope', '$location', '$routeParams',
    function($http, $log,$scope, $location, $routeParams) {
        var thisCtrl = this;

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

        this.loadContacts();
}]);
