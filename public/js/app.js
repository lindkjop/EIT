angular.module('sampleApp', ['ngRoute','ngResource', 'appRoutes', 'MainCtrl', 'NerdCtrl', 'ArticleService', 'GeekCtrl', 'BookService']);

//For some reason it does not work to inject ArticleService here. 