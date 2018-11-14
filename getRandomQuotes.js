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

const getRandomQuotes = numberOfQuotes => {
    const hasRequestedTooMany = numberOfQuotes > quotes.length;
    const count = hasRequestedTooMany ? quotes.length : numberOfQuotes;

    return range(count).reduce(
        out => appendRandomQuote(out),
        [],
    );
};

module.exports = getRandomQuotes;
