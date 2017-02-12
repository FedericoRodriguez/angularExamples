var app = angular.module("myapp",["ngRoute"]);
//Ruteo
app.config(function($routeProvider, $locationProvider) {
	var routeBase = "/src";
    $routeProvider
    .when("/",{
    	templateUrl:routeBase+"/templates/home.html",
    	controller: "HomeController"
    })
    .when("/comentario",{
    	templateUrl:routeBase+"/templates/comentario.html",
    	controller: "ComentarioController"
    })
    .when("/posts", {
        templateUrl :routeBase+"/templates/posts.html",
        controller : "PostsController"
    });
 $locationProvider.html5Mode(true); //activate HTML5 Mode
  
});