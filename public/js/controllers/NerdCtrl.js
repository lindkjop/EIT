angular.module('NerdCtrl', []).controller('NerdController', function($scope, Book) {
	
	var books = Book.query(function() {

	});
	$scope.books = books;
	$scope.sortVariable = 'price';
	$scope.filters = { };
	$scope.filtering = function() {
		if(this.checked){
			filter.price=50;
		}
	};
	$scope.tagline = 'Nothing beats a pocket protector!';

});