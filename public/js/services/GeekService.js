angular.module('BookService', []).factory("Book", function($resource) {
	return $resource("/api/books/:books_id");
});