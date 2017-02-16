app.factory("PostService",["$http","$q",function($http,$q){
 	var postService = {};
	postService.posts = {};
    postService.nuevoPost={};

 return{	//post

   traerPosts : function(){
   		var deferred = $q.defer();
		$http.get("http://localhost:3000/posts").then(function (response) {
	        deferred.resolve(response.data);
		}, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		    	deferred.reject(response); 
  			}
  		);
		return  deferred.promise;
	},
	agregarPost : function(nuevoPost){
		var deferred = $q.defer();
		$http.post("http://localhost:3000/posts",nuevoPost).then(function (response) {
			//postService.posts.push(response.data);
			//postService.nuevoPost={};
	        deferred.resolve(response.data);
		}, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		    	deferred.reject(response); 
  			}
  		);
		return  deferred.promise;
	},
	borrarPost : function(post) {
		var deferred = $q.defer();
		$http.delete("http://localhost:3000/posts/"+post.id).then(function (response) { 
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