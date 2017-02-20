app.factory("HomeService",["$http","$q",function($http,$q){
 return{	//post

   traerRepos : function(){
   		var deferred = $q.defer();
		$http.get("https://api.github.com/users/FedericoRodriguez/repos?access_token=2f132e56af1590eb35553eb2f5b4703a3ddfda71").then(function (response) {
	        deferred.resolve(response.data);
		}, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		    	deferred.reject(response); 
  			}
  		);
		return  deferred.promise;
	}
  }
}]);