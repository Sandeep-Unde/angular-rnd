'use strict';

var app = angular.module('myApp').factory('UserListService', ['$http', '$q','$window', 'UserService', function($http, $q,window, UserService){
	
	
	var APP_HOME_URI = 'http://localhost:8080/com-angular-web/';
	var REST_SERVICE_URI = 'http://localhost:8080/com-angular-web/userList/';

    var factory = {
        fetchAllUsers: fetchAllUsers,
        toHome : toHome,
        updateUser,updateUser,
    };

    return factory;

    function fetchAllUsers() {
        var deferred = $q.defer();
        var fetchUserURI = APP_HOME_URI+'userList/';
        $http.get(fetchUserURI)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while fetching Users');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    
    function toHome(){
    	window.location.href = APP_HOME_URI;
    	UserService.fetchAllUsers();
    }
    
    function updateUser(userList){
    	 var deferred = $q.defer();
    	 var updateUserURI = APP_HOME_URI+'updateUsers/';
         $http.post(updateUserURI, userList)
             .then(
             function (response) {
                 deferred.resolve(response.data);
             },
             function(errResponse){
                 console.error('Error while updating Users');
                 deferred.reject(errResponse);
             }
         );
         return deferred.promise;
    }

	
	
	
	
	
	
}]);