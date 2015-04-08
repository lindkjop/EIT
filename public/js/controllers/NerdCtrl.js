angular.module('NerdCtrl', []).controller('NerdController', function($scope, Book) {
	
	var books = Book.query(function() {

	});
	$scope.books = books;
	$scope.tagline = 'Nothing beats a pocket protector!';

});