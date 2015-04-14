angular.module('NerdCtrl', []).controller('NerdController', function($scope, Book) {
	
	var books = Book.query(function() {

	});
	$scope.books = books;
	$scope.sortVariable = 'price';
	$scope.filters = { };
	$scope.tagline = 'Nothing beats a pocket protector!';

});