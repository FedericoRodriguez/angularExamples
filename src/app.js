var app = angular.module("myapp",[]);

app.controller("HomeController",["$scope","$http",function($scope,$http){

	$scope.nuevoComentario = {};
	$scope.comentarios = [
		{
			texto: "Primer Comentario",
			autor: "AT"
		},
		{
			texto: "Segundo Comentario",
			autor: "otro"
		}
	];
	$scope.agregarComentario = function(){

		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario = {texto: "Comentario",autor: "Nombre del Autor"};
	}
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
	}
	//tambien se puede usar $scope.$watchCollection para escuchar sobre la  coleccion posts y ejecutar una funcion.
		

}]);
//9