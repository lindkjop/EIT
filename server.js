//modules
var express = require("express");
var app = express();
var bodyParser = require("body-parser"); 
var methodOverride = require("method-override");
var mongoose = require('mongoose');
mongoose.set('debug', true);

//config

var dbURI = 'mongodb://lesedyr:lesedyr@proximus.modulusmongo.net:27017/se5ganeP';
mongoose.connect(dbURI);
console.log('Connected to database:' + dbURI);

//app.use(express.bodyParser());
//app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8888;
var router = express.Router();


//app.use(app.router);

app.listen(port);

//say that all routes shall start with /api
app.use('/api', router);

//configure routes
require('./app/routes')(app, router);

console.log('Magic happens on port ' + port);

exports = module.exports = app;