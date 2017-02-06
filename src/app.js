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
}]);