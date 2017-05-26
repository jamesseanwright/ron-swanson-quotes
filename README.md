# Ron Swanson quotes API
Because Ron Swanson is a hero. Just a ridiculously simple Node server.

## Production host
[http://ron-swanson-quotes.herokuapp.com/v2/quotes](http://ron-swanson-quotes.herokuapp.com/v2/quotes)

The `Access-Control-Allow-Origin` header is set to `*` so that you can make requests from any domain.

## APIs

### `GET /v2/quotes`
Returns an array with one quote:
```
[
	"Capitalism: God’s way of determining who is smart and who is poor."
]
```

### `GET /v2/quotes/<count>`
Returns an array with `<count>` quotes e.g. `GET /quotes/2`
```
[
	"Capitalism: God’s way of determining who is smart and who is poor.",
	"Clear alcohols are for rich women on diets."
]
```

## JavaScript demo
[JSFiddle](http://jsfiddle.net/7g2w4dhc/27/) (requires a browser with support for `Promise`s, ES6, `fetch`, and generator functions.)

## Hubot integration
I wrote a Hubot script that can be installed via npm. See the [repo](https://github.com/jamesseanwright/hubot-swanson) for more details.
