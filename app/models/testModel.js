var mongoose = require('mongoose');

module.exports = mongoose.model('TestModel', {
	testField : {type : String, default : ''}
});