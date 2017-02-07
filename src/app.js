var app = angular.module("myapp",["ngRoute"]);
//Ruteo
app.config(function($routeProvider) {
    $routeProvider
    .when("/",{
    	templateUrl: "templates/home.html",
    	controller: "HomeController"
    })
    .when("/posts", {
        templateUrl : "/templates/posts.html",
        controller: "PostsController"
    });

});

//9