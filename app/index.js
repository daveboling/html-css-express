'use strict';

var express = require('express');
var app     = express();

//Get takes two things
//1: The path, 2: A callback function with two parameters: 
//-------------Request and Response
app.get('/', function(req, res){
	res.send('We got it.');
});

app.listen(3000);