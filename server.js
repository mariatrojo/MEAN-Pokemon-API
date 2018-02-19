var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/myAngularApp/dist'));




app.listen(8000, function() {
	console.log('Pokemon API listening on port 8000');
})