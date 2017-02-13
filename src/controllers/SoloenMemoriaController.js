app.controller("SoloenMemoriaController",["$scope","$http",function($scope,$http){

	$scope.nuevaMemoria = {};
	$scope.memorias = [
		{
			texto: "Primer memoria",
			autor: "default value"
		},
		{
			texto: "Segundo memoria",
			autor: "default value"
		}
	];
	$scope.nuevaMemoria.autor = "...";
	$scope.agregarMemoria = function(){

		$scope.memorias.push($scope.nuevaMemoria);
		$scope.nuevaMemoria = {};
		$scope.nuevaMemoria.autor = "...";
	}
	$scope.borrarMemoria = function(memoria){
 		var index = $scope.memorias.indexOf(memoria);
		$scope.memorias.splice(index, 1);
	}
}]);
