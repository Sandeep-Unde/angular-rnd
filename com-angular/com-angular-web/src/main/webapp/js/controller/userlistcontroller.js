'use strict';

angular.module('myApp').controller('UserListController', ['$scope', 'UserListService', 'UserService',  function($scope, UserListService, UserService) {
    var self = this;
    self.user={id:null,username:'',address:'',email:''};
    self.users=[];

   /* self.submit = submit;
    self.edit = edit;
    self.remove = remove;
    self.reset = reset;*/
    self.toHome = toHome;


    fetchAllUsers();

    function fetchAllUsers(){
    	UserListService.fetchAllUsers()
            .then(
            function(d) {
                self.users = d;
            },
            function(errResponse){
                console.error('Error while fetching Users');
            }
        );
    }
    
    function toHome(){
    	alert('going home');
    	UserListService.toHome();
    }

   

}]);
