var book = require('./models/book');
var article = require('./models/article');

module.exports = function(app) {
	//Server routes here

	//Api routes
	app.get('/api/books', function(request, response){

	})

	//frontend routes
	app.get('*', function(request, response){
		response.sendfile('./public/views/index.html');
	});

	app.get('*', function(request, response){
		response.sendfile('./public/views/index.html');
	});
}