# Ron Swanson quotes API
Because Ron Swanson is a hero. Just a ridiculously simple Node server.

## APIs

### ~~`GET /quotes`~~ Deprecated as of version 1.5, will be removed in version 2!
Returns a random quote in this format:
```
{ quote: "Capitalism: God’s way of determining who is smart and who is poor." }
```

### `GET /v2/quotes`
Returns a random quote in this format:
```
[
	{ quote: "Capitalism: God’s way of determining who is smart and who is poor." }
]
```

### `GET /v2/quotes/<count>`
Returns `<count>` random quotes in the same format format. E.g. GET /quotes/2
```
[
	{ quote: "Capitalism: God’s way of determining who is smart and who is poor." },
	{ quote: "Clear alcohols are for rich women on diets." }
]
```

## Production host
[http://ron-swanson-quotes.herokuapp.com/quotes](http://ron-swanson-quotes.herokuapp.com/quotes)

The `Access-Control-Allow-Origin` header is set to `*` so that you can make requests from any domain.

## JavaScript demo
[JSFiddle](http://jsfiddle.net/jamesseanwright/7g2w4dhc/2/) (requires a browser with support for promises and generators.)

## Hubot integration
I wrote a Hubot script that can be installed via npm. See the [repo](https://github.com/jamesseanwright/hubot-swanson) for more details.
