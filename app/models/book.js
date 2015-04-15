// grab the mongoose module
/*var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Nerd', {
	name : {type : String, default: ''}
});*/


//Grab mongoose module
var mongoose = require('mongoose');
//Create mongoose schema
var Schema = mongoose.Schema;

//Perhaps make ageGroup an enum?
var bookSchema = new Schema({
	isbn: Number, 
	title: String,
	author: String,
	genre: String, 
	agegroup: String,
	price: Number,
	popularity: Number,
	description: String,
	//image: { data: Buffer, contentType: String}
	//Put in coverimage?
	//Include a introduction to the book?
});

module.exports = mongoose.model('Book', bookSchema);