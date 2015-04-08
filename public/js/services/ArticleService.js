angular.module('ArticleService', []).factory("Article", function($resource) {
	return $resource("/api/article/:article_id");
});