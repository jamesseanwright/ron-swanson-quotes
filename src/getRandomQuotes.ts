import quotes from "./quotes";

const range = (count: number) => Array<number>(count).fill(1);

const appendRandomQuote = (currentQuotes: string[]): string[] => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    return currentQuotes.includes(quote)
        ? appendRandomQuote(currentQuotes)
        : [
            ...currentQuotes,
            quote,
        ];
};

const getRandomQuotes = (quoteCount: number) =>
    range(Math.min(quoteCount, quotes.length)).reduce(
        out => appendRandomQuote(out),
        [] as string[],
    );

export default getRandomQuotes;
