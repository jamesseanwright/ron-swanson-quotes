import quotes from "./quotes";

const randomUniqueRange = (count: number, max: number) => {
    const traverse = (i: number, numbers: number[]): number[] => {
        if (i === count) {
            return numbers;
        }

        const next = Math.floor(Math.random() * max);

        if (numbers.includes(next)) {
            return traverse(i, numbers);
        }

        numbers[i] = next;
        return traverse(i + 1, numbers);
    };

    return traverse(0, Array<number>(count).fill(1));
};

const getRandomQuotes = (quoteCount: number) =>
    randomUniqueRange(
        Math.min(quoteCount, quotes.length - 1),
        quotes.length,
    ).map(x => quotes[x]);

export default getRandomQuotes;
