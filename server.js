//modules
var http = require("http");
//var express = require("express");
//var app = express();
//var bodyParser = require("bodyParser");
//var methodOverride = require("methodOverride");

//config

//var db = require('./')

function start() {
  function onRequest(request, response) {
  	console.log("request recieved");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;