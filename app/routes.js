var bookModel = require('./models/bookModel');

module.exports = function(app) {
	//Write backend routes here

	//frontend routes - just one for now
	app.get('*', function(request, response){
		response.sendfile('./public/views/index.html');
	});
}