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

  	$scope.myInterval = 5000;
  	
  	$scope.selectArticle = function(i) {
    $scope.selected = i;
    $scope.articles.selected.active = true;
  	};
  	/*var slides = $scope.slides = [];
  	$scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };*/
  //$scope.addSlide();
  /*for (var i=0; i<4; i++) {
    $scope.addSlide();
  }*/
});

/*angular.module('MainCtrl').controller('CarouselDemoCtrl', function ($scope) {
  
});*/