"use strict";

const quotes = require("./quotes");

const range = count => Array(count).fill(null);

const appendRandomQuote = currentQuotes => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    return currentQuotes.includes(quote)
        ? appendRandomQuote(currentQuotes)
        : [
            ...currentQuotes,
            quote,
        ];
};

const getRandomQuotes = quoteCount =>
    range(Math.min(quoteCount, quotes.length)).reduce(
        out => appendRandomQuote(out),
        [],
    );

module.exports = getRandomQuotes;
