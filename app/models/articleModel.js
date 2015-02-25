var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
	title: String,
	author: String,
	body: String,
	//Should we have the possibility to comment artcles?
	//comments: [{body: String, date: Date}],
	date: { type: Date, default: Date.now }
	//Should we be able to hide the articles and have voting and favoriteing?
	/*hidden: boolean,
	meta: {
    	votes: Number,
    	favs:  Number
  	}*/
})

module.exports = mongoose.model('Article', articleSchema);