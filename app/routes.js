var Book = require('./models/Book');
var Article = require('./models/Article');

module.exports = function(app, router) {
	//Middleware
	router.use(function(reqest, response, next) {	
    	console.log('Something is happening.');
    	next(); // make sure we go to the next routes and don't stop here
	});
	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	//Routes to /books
	//Create a new book
	app.post('/api/books', function (request, response, next) {
			//Create the book and fetch the data to be updated - Need a check here, 
			//you do not have to update all data at the same time
			var book = new Book();
			book.title = request.body.title;
			book.isbn = request.body.isbn;
			book.author = request.body.author;
			book.genre = request.body.genre;
			book.agegroup = request.body.agegroup;
			book.price = request.body.price;

			//Log messages
			console.log("POST: ");
  			console.log(request.body);
			console.log("Post call to create book with " + "title: " + request.body.title);
			
			//Save book to database via mongoose
			book.save(function (err, result) {
	        	if (err) {
	        		response.send('Something went wrong!' + result);
	            } else {
	        		console.log('Book created!');
	        	}
	    	});
			response.json(book + 'was created');	
	    });
	
	//Get all books
	app.get('/api/books', function (request, response, next) {
		//Logging
		console.log('Get call to get all books.');
		//Find book in database via mongoose
		Book.find(function (err, books) {
			console.log('All books will be returned.');
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
				book.isbn = request.body.isbn;
				book.author = request.body.author;
				book.genre = request.body.genre;
				book.agegroup = request.body.agegroup;
				book.price = request.body.price;
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
		//console.log('Trying to delete book');
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

	// Article routes =================================================

	//Create a new article
	app.post('/api/article', function (request, response, next) {
			//Create the book and fetch the data to be updated - Need a check here, 
			//you do not have to update all data at the same time
			var article = new Article();
			article.title = request.body.title;
			article.author = request.body.author;
			article.ingress = request.body.ingress;
			article.body = request.body.body;
			//Should we have the possibility to comment artcles?
			//comments: [{body: String, date: Date}],
			

			//Log messages
			console.log("POST: ");
  			console.log(request.body);
			console.log("Post call to create article and " + "title: " + request.body.title);
			
			//Save book to database via mongoose
			article.save(function (err, result) {
	        	if (err) {
	        		response.send('Something went wrong!' + result);
	            } else {
	        		console.log('Article created!');
	        	}
	    	});
			response.json(article + 'was created');	
	    });
	
	//Get all articles
	app.get('/api/article', function (request, response, next) {
		//Logging
		//console.log('Get call to get all books.');
		//Find book in database via mongoose
		Article.find(function (err, articles) {
			//console.log('All books will be returned.');
			if(err){
				console.log('Something went wrong when retrieving articles');
				response.send(err);
			} else {
				console.log('Returning article');	
			}
			response.json(articles);
		});	
	});

	//Api routes on /articles/:article_id
	//Get one specific book
	app.get('/api/article/:article_id', function (request, response) {
		Article.findById(request.params.book_id, function (err, article) {
			if(err){
				console.log('Something went wrong when retrieving the article with id: ' + request.params.article_id);
				response.send(err);
			} else {
				console.log('Returning article with id: ' + request.params.article_id);
			}
			//console.log(book);
			response.json(article);
		});
	});

	//Update a article information
	app.put('/api/article/:article_id', function (request, response) {
		Article.findById(request.params.article_id, function (err, article) {
			if(err){
				//console.log('Could not change title');
				response.send(err);
			} else{
				//console.log('Changed title from: ' + book.title + " to: " + request.body.title);
				article.title = request.body.title;
				article.author = request.body.author;
				article.ingress = request.body.ingress;
				article.body = request.body.body;
				
			}

			article.save(function (err) {
				if(err){
					response.send(err);
				}
				response.json({message: 'Article updated!'}, article);
			});
		});
	});

	//Delete a book
	app.delete('/api/article/:article_id', function (request, response) {
		//console.log('Trying to delete book');
		Article.remove({
			_id: request.params.article_id
		}, function (err, article) {
			if(err){
				console.log('Something went wrong when deleting article with id: ' + request.params.article_id);
				response.send(err);
			} else {
				return response.json({message: 'Succesfully deleted'})
			}
		});
	});

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};