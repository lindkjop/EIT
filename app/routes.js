var Book = require('./models/book');
var Article = require('./models/article');

module.exports = function(app, router) {
	//Middleroute - being called each time something happens - necessary?
	router.use(function(reqest, response, next) {
    	
    	console.log('Something is happening.');
    	next(); // make sure we go to the next routes and don't stop here
	});


	//Routes to /books
	//Create a new book
	app.post('/api/books', function (request, response, next) {
			var book = new Book();
			book.title = request.body.title,
			console.log("POST: ");
  			console.log(request.body);
			console.log("Post call to create book and " + "title: " + request.body.title);
			//console.log(request.headers);

			//book.isbn = request.body.isbn;
			//book.title = request.body.title;
			//book.author = request.body.author;
			//book.genre = request.body.genre;
			//book.agegroup = request.body.agegroup;
			
			book.save(function (err, result) {
	        	if (err) {
	        		return console.log('Something went wrong!' + result);
	            } else {
	        		return console.log('Book created!');
	        	}
	    	});

			return response.json(book + 'was created');
			
	    });
	
	//Get all books
	app.get('/api/books', function (request, response, next) {
		console.log('Get call to get all books.');
		Book.find(function (err, books) {
			//console.log('All books will be returned.');
			if(err){
				console.log('Something went wrong when retrieving books');
				response.send(err);
			} else {
				console.log('Returning books');	
			}
			response.json(books);
			
		});	
	});

	//Api routes on /books/:books_id

	//Get one specific book
	app.get('/api/books/:book_id', function (request, response) {
		Book.findById(request.params.book_id, function (err, book) {
			if(err){
				console.log('Something went wrong when retrieving the book with id: ' + request.params.book_id);
				response.send(err);
			} else {
				console.log('Returning book with id: ' + request.params.book_id);
			}
			//console.log(book);
			response.json(book);

		});
	});

	//Update a books information
	app.put('/api/books/:book_id', function (request, response) {
		Book.findById(request.params.book_id, function (err, book) {
			if(err){
				//console.log('Could not change title');
				response.send(err);
			} else{
				//console.log('Changed title from: ' + book.title + " to: " + request.body.title);
				book.title = request.body.title;
			}

			book.save(function (err) {
				if(err){
					response.send(err);
				}
				response.json({message: 'Book updated!'}, book);
			});
		});
	});

	//Delete a book
	app.delete('/api/books/:book_id', function (request, response) {
		console.log('Trying to delete book');
		Book.remove({
			_id: request.params.book_id
		}, function (err, book) {
			if(err){
				console.log('Something went wrong when deleting book with id: ' + request.params.book_id);
				response.send(err);
			} else {
				return response.json({message: 'Succesfully deleted'})
			}
		});
	});

	//Server routes here

	//frontend routes
	app.get('*', function(request, response){
		response.sendfile('./public/views/index.html');
	});

	app.get('*', function(request, response){
		response.sendfile('./public/views/index.html');
	});
}