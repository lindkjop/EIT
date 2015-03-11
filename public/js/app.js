//This is not used yet

/** * Main AngularJS Web Application */ 
var app = angular.module('leseDyrApp', []);

app.config(function($routeProvider, $locationProvider) {
	//Usikker på om http etc er nødvendig
	$routeProvider
	.when('http://localhost:8888/bøker/', {
		templateUrl: "/views/books.html"
		controller: "booksController"
	})
})

/** * Configure the Routes */ 
/**app.config(['$routeProvider', function ($routeProvider) 
	{ $routeProvider 
// Home 
.when("/", {templateUrl: "partials/home.html", <span class="highlight">controller: "PageCtrl"</span>}) 
// Pages 
//.when("/about", {templateUrl: "partials/about.html", <span class="highlight">controller: "PageCtrl"</span>}) 
//.when("/faq", {templateUrl: "partials/faq.html", <span class="highlight">controller: "PageCtrl"</span>}) 
/* etc… routes to other pages… */ 
// Blog 
//.when("/blog", {templateUrl: "partials/blog.html", <span class="highlight">controller: "BlogCtrl"</span>}) 
//.when("/blog/post", {templateUrl: "partials/blog_item.html",
 //<span class="highlight">controller: "BlogCtrl"</span>}) 
 // else 404 
 //.otherwise("/404", {templateUrl: "partials/404.html", <span class="highlight">controller: "PageCtrl"</span>}); }]);
//Read more at http://www.airpair.com/angularjs/building-angularjs-app-tutorial#lDUUIZoLlsqoQteJ.99