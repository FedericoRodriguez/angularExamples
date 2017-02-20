/*app.controller("PostsController",["$scope","$http",function($scope,$http){
	//post
	$scope.posts = {};
	$http.get("http://localhost:3000/posts").then(function(response) {
        $scope.posts = response.data;
    });
    $scope.nuevoPost={};

	$scope.agregarPost = function(){

		$http.post("http://localhost:3000/posts",$scope.nuevoPost).then(function (response) {
			$scope.posts.push(response.data);
			$scope.nuevoPost={};
		});
	};
	$scope.borrarPost = function(post) {
		$http.delete("http://localhost:3000/posts/"+post.id).then(function (response) {
			$http.get("http://localhost:3000/posts").then(function(response) {
		        $scope.posts = response.data;
		    });
		});
		//debugger;

	}
	//tambien se puede usar $scope.$watchCollection para escuchar sobre la  coleccion posts y ejecutar una funcion.
}]);	*/

/*
/////////////////////////////FACTORIES///////////////////////////////////////////////////////
app.controller("PostsController",["$scope","PostService",function($scope,PostService){
	//FACTORIES
	PostService.traerPosts().then(function(data) { 
		$scope.posts = data; 
	});
    $scope.nuevoPost={};


	$scope.agregarPost = function(){
		PostService.agregarPost($scope.nuevoPost).then(function(data) { 
		 	$scope.posts.push(data);
			$scope.nuevoPost={};
	 	});
	};
	$scope.borrarPost = function(post) {
		PostService.borrarPost(post).then(function(data) { 
			PostService.traerPosts().then(function(data) { 
			 	$scope.posts = data; 
			 });
		});
	}
}]);
*/
/////////////////////////SERVICES/////////////////////////////////////////////////////////////
app.controller("PostsController",["$scope","PostService",function($scope,PostService){
	//FACTORIES
	PostService.traerPosts().then(function(data) { 
		$scope.posts = data; 
	});
    $scope.nuevoPost={};


	$scope.agregarPost = function(){
		PostService.agregarPost($scope.nuevoPost).then(function(data) { 
		 	$scope.posts.push(data);
			$scope.nuevoPost={};
	 	});
	};
	$scope.borrarPost = function(post) {
		PostService.borrarPost(post).then(function(data) { 
			PostService.traerPosts().then(function(data) { 
			 	$scope.posts = data; 
			 });
		});
		
	}
}]);