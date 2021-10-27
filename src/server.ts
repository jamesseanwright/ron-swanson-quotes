import * as express from "express";
import * as rateLimit from 'express-rate-limit';
import getRandomQuotes from "./getRandomQuotes";
import searchQuotes from "./searchQuotes";
import schema from "./schema.json";


const app = express();
const port = process.env.PORT || 3000;
const requestLimiter = rateLimit({
    windowMs: 2500, 
    max: 10
})

app.use(requestLimiter)

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
});

app.all("*", (req, res, next) => {
    console.log(`${dateFormatter.format(new Date())} - request for ${req.path}`);
    res.set("Access-Control-Allow-Origin", "*");
    next();
});

app.get("/v2/quotes/search/:term", (req, res) => {
    res.send(searchQuotes(req.params.term));
});

app.get("/v2/quotes/:num?", (req, res) => {
    res.send(getRandomQuotes(parseInt(req.params.num, 10) || 1));
});

app.get("/v2/schema", (req, res) => {
    res.set("Cache-Control", "max-age=172800, stale-while-revalidate=3600");
    res.json(schema);
});

app.listen(port, () => {
    console.log("Server running on port", port);
});
