'use strict';

var express = require('express');
var quotes = require('./quotes');
var app = express();
var port = process.env.PORT || 3000;

app.get('/quotes', function (req, res) {
	var quote = quotes[Math.floor(Math.random() * quotes.length)];
	res.json({quote: quote});
});

app.listen(port, function () {
	console.log('Server running on port', port);
})