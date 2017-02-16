app.service("PostService",["$http","$q",function($http,$q){
	this.posts = {};
    this.nuevoPost={};
	//post

   this.traerPosts = function(){
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
	this.agregarPost = function(nuevoPost){
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
	this.borrarPost = function(post) {
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
}]);