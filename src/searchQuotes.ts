"use strict";

import quotes from "./quotes";

const searchQuotes = (term: string) => {
    const regExp = new RegExp(term, 'i');

    return quotes.filter(quote =>
        quote && quote.match(regExp)
    );
};

export default searchQuotes;
