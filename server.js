'use strict';

var express = require('express');
var quotesRepository = require('./quotesRepository');
var app = express();
var port = process.env.PORT || 3000;

app.all('*', function (req, res, next) {
	res.set('Access-Control-Allow-Origin', '*');
	next();
});

/* Legacy endpoint. Deprecated as of version 1.5.
 * The new response format served by /v2 will become
 * the new response for this endpoint in version 2. */
app.get('/quotes', function (req, res) {
	var quote = quotesRepository.getRandom(1)[0];
	res.send({ quote: quote });
});

app.get('/v2/quotes/:num?', function (req, res) {
	res.send(quotesRepository.getRandom(req.params.num || 1));
});

app.listen(port, function () {
	console.log('Server running on port', port);
})