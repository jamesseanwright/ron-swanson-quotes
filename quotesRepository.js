'use strict';

var quotes = require('./quotes');

module.exports = {
	getRandom: function getRandom(num) {
		var out = [];

		while (num > 0) {
			var quote = quotes[Math.floor(Math.random() * quotes.length)];
			var quoteAlreadyUsed = out.indexOf(quote) > -1;

			if (!quoteAlreadyUsed)
		 		out.push(quote);
		 	
		 	num--;
		}

		return out;
	}
};