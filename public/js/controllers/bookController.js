//This is not finished yet

//var app = angular.module('leseDyrApp', []);

/** Bookcontroller **/
//angular.module('showBooks'){
function showBooks($scope, $http) {
	//Check out ng-resource!
	$scope.books = []

	$scope.getItems = function() {
		$http({method : 'GET', url : 'http://localhost:8888/api/books/'})
		.success(function(data, status) {
			$scope.books = data;
		});
		.error(function(data, status) {
			alert("Error");
		});
	}

}
//}