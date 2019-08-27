"use strict";

const quotes = require("./quotes");

const searchQuotes = term => {
    const regExp = new RegExp(term, 'i');
    return quotes.filter(quote => {
        return quote.match(regExp);
    });
};

module.exports = searchQuotes;