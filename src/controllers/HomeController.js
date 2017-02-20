app.controller("HomeController",["$scope","$http","$location","HomeService",function($scope,$http,$location,HomeService){

	$scope.title = "Bienvenidos";
	$scope.bandera_hover = false;
	$scope.bandera_hover2 = false;
	$scope.myStyle = {};
	$scope.repos={};

	//apply
	$('#cambiarTitulo').click(function(){
		//USAR NG-CLICK EN VEZ DE APPLY
		$scope.$apply(function(){
			//forma correcta, aplly te introduce en el scope y llama a $digest() -> watchers
			$scope.title="Hola a todos!!!";
		});
		//$scope.$digest();
		//$scope.$apply();//aca afuera si hay errores angular no se entera porque esta operando fuera del scope.
	});
	//Obtener los datos de la fabrica utilizando PROMISES
	HomeService.traerRepos().then(function(data) { 
			$scope.repos = data;
	});
	
}]);