"use strict";

const express = require("express");
const getRandomQuotes = require("./getRandomQuotes");
const app = express();
const port = process.env.PORT || 3000;

app.all("*", (req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    next();
});

app.get("/v2/quotes/:num?", (req, res) => {
    res.send(getRandomQuotes(parseInt(req.params.num, 10) || 1));
});

app.listen(port, () => {
    console.log("Server running on port", port);
});
