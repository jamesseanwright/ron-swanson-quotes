'use strict';

var quotes = require('./quotes');

module.exports = {
	getRandom: function getRandom(num) {
		var out = new Array();
		while(num > 0){
		 	out.push({ quote: quotes[Math.floor(Math.random() * quotes.length)]});
		 	num --;
		}
		return out;
	}
};