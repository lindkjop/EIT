angular.module('MainCtrl', []).controller('MainController', function($scope, Article) {

	//Here I will get articles for filling up the carousel, 
	//recommandations and articles for the rest of the page

	var articles= Article.query(function() {

	});
	$scope.articles = articles;
	$scope.tagline = 'To the moon and back!';	
});