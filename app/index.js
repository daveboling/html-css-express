'use strict';

var express = require('express');
var app     = express();
var morgan  = require('morgan');

//Good for logging stuff to the developer
app.use(morgan('dev'));

//Get takes two things
//1: The path, 2: A callback function with two parameters: 
//-------------Request and Response
app.get('/', function(req, res){
	res.send('We got it.');
});

app.listen(3000, function() {
	console.log('Express.js is listening on port 3000...');
});