'use strict';

var quotes = require('./quotes');

module.exports = {
	getRandom: function getRandom() {
		return quotes[Math.floor(Math.random() * quotes.length)];
	}
};