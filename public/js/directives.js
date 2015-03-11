angular.module('navigationDirectives', [])
    .directive('navbar', function(){
      return {
        restrict: 'E',
        scope: false,
        templateUrl: './views/header.html'
      }
    });