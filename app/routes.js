var Book = require('./models/book');
var Article = require('./models/article');

module.exports = function(app, router) {
	//Middleroute - being called each time something happens - not necessary yet
	/**router.use(function(reqest, response, next) {
    	// do logging
    	console.log('Something is happening.');
    	next(); // make sure we go to the next routes and don't stop here
	});*/
	
	app.post('/api/books', function(request, response){
		var book = new Book();
			console.log("POST: ");
  			console.log(request.body);
			//book.isbn = request.body.isbn;
			//book.title = request.body.title;
			//book.author = request.body.author;
			//book.genre = request.body.genre;
			//book.agegroup = request.body.agegroup;
			console.log("Post call to create book");

			book.save(function(err) {
	        	if (err)
	            	response.send(err);
	        	response.json({ message: 'Book created!' });
	    	});
			return response.send(book);
	    });

	//Server routes here

	//Api routes
	//Get all books
	app.get('/api/books', function(request, response, next){
		//Book.find(function(err, books){
			console.log('All books will be returned.');
    		next();

			//if(err)
			//	response.send(err);

		//response.json(books);
		//});
	});

	//Create book
	//app

		//next();
	

	//Get one specific book

	//Update a books information

	//Delete a book

	//frontend routes
	app.get('*', function(request, response){
		response.sendfile('./public/views/index.html');
	});

	app.get('*', function(request, response){
		response.sendfile('./public/views/index.html');
	});
}