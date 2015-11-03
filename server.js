'use strict';

var express = require('express');
var quotesRepository = require('./quotesRepository');
var app = express();
var port = process.env.PORT || 3000;

app.get('/quotes', function (req, res) {
	res.set('Access-Control-Allow-Origin', '*');
	res.send(quotesRepository.getRandom(1));
});

app.get('/quotes/:num', function (req, res) {
	res.set('Access-Control-Allow-Origin', '*');
	res.send(quotesRepository.getRandom(req.params.num));
});

app.listen(port, function () {
	console.log('Server running on port', port);
})