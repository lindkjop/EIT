//modules
var express = require("express");
var app = express();
var bodyParser = require("body-parser"); 
var methodOverride = require("method-override");

//config

var db = require('./config/db');

var port = process.env.PORT || 8888;
var router = express.Router();

//say that all routes shall start with /api
app.use('/api', router);

//configure routes
require('./app/routes')(app, router);

//Setting up express-application

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/public'));



console.log('Magic happens on port ' + port);

app.listen(port);

exports = module.exports = app;