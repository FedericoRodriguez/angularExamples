app.controller("HomeController",["$scope","$location",function($scope,$location){

	$scope.title = "Bienvenidos";
	$scope.bandera_hover = false;
	$scope.bandera_hover2 = false;
	$scope.myStyle = {};

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
	
}]);