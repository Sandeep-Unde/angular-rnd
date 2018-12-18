'use strict';

var app = angular.module('myApp').factory('UserListService', ['$http', '$q','$window', 'UserService', function($http, $q,window, UserService){
	
	
	
	var REST_SERVICE_URI = 'http://localhost:8080/com-angular-web/userList/';

    var factory = {
        fetchAllUsers: fetchAllUsers,
        toHome : toHome,
    };

    return factory;

    function fetchAllUsers() {
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI)
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
    	window.location.href = 'http://localhost:8080/com-angular-web/';
    	UserService.fetchAllUsers();
    }

	
	
	
	
	
	
}]);