var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Perhaps make ageGroup an enum?
var bookSchema = new Schema({
	//isbn: Number, 
	//title: String,
	//author: String,
	//genre: String, 
	//agegroup: String
	//Put in coverimage?
})

module.exports = mongoose.model('Book', bookSchema);