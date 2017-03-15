

var app = angular.module("myApp",["ngRoute"]);
//Ruteo
app.config(function($routeProvider, $locationProvider) {
   // $locationProvider.hashPrefix("!");
   
    $routeProvider
    .when("/",{
    	templateUrl:"src/templates/home.html",
    	controller: "HomeController"
    })
    .when("/homepage",{
        templateUrl:"src/templates/homepage.html",
        controller: "HomePageController"
    })
    .when("/memorias",{
    	templateUrl:"src/templates/memorias.html",
    	controller: "SoloenMemoriaController"
    })
    .when("/posts", {
        templateUrl :"src/templates/posts.html",
        controller : "PostsController"
    })
    .otherwise( { redirectTo: "/" });
    //$locationProvider.html5Mode(true); //activate HTML5 Mode
  
});