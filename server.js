'use strict';

var express = require('express');
var quotesRepository = require('./quotesRepository');
var app = express();
var port = process.env.PORT || 3000;

app.get('/quotes', function (req, res) {
	res.set('Access-Control-Allow-Origin', '*');
	res.json({ quote: quotesRepository.getRandom() });
});

app.listen(port, function () {
	console.log('Server running on port', port);
})