var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Perhaps make ageGroup an enum?
var bookSchema = new Schema({
	isbn: Number, 
	title: String,
	author: String,
	genre: String, 
	agegroup: String
	//Put in coverimage?
	//Include a introduction to the book?
});

//console.log('Creating book schema');
module.exports = mongoose.model('Books', bookSchema);