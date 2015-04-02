angular.module('MainCtrl', []).controller('MainController', function($scope, Article, Book) {

	//Here I will get articles for filling up the carousel, 
	//recommandations and articles for the rest of the page

	var articles= Article.query(function() {
	});
	$scope.articles = articles;

	var books = Book.query(function() {

	});
	$scope.books = books;
	$scope.tagline = 'To the moon and back!';	
});