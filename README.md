# Ron Swanson quotes API

Because Ron Swanson is a hero. Just a ridiculously simple Node.js server.

## Production host

[https://ron-swanson-quotes.herokuapp.com/v2/quotes](http://ron-swanson-quotes.herokuapp.com/v2/quotes)

The `Access-Control-Allow-Origin` header is set to `*` so that you can make requests from any domain.

## APIs

### `GET /v2/quotes`

Returns an array with one quote:

```json
[
    "Capitalism: God’s way of determining who is smart and who is poor."
]
```

### `GET /v2/quotes/<count>`

Returns an array with `<count>` quotes e.g. `GET /quotes/2`

```json
[
    "Capitalism: God’s way of determining who is smart and who is poor.",
    "Clear alcohols are for rich women on diets."
]
```

### `GET /v2/quotes/search/<term>`

Returns an array of quotes matching `<term>` without case sensitivity e.g. `GET /quotes/search/hate`

```json
[
    "There's only one thing I hate more than lying: skim milk. Which is water that's lying about being milk.",
    "I hate everything."
]
```

## OpenAPI 3 Schema

An [OpenAPI](https://swagger.io/docs/specification/about/) 3 schema is available at `/v2/schema`. Thanks to [Chris Gali](https://github.com/chrisgali01) for the suggestion and the initial draft.

## JavaScript demo

[JSFiddle](http://jsfiddle.net/7g2w4dhc/27/) (requires a browser with support for `Promise`s, ES6, `fetch`, and generator functions.)

## Hubot integration

I wrote a Hubot script that can be installed via npm. See the [repo](https://github.com/jamesseanwright/hubot-swanson) for more details.

## Local development

Once you've cloned this repo, run `npm i` to install the dependencies.

Then you can run:

* `npm run build`: builds the TypeScript source code
* `npm start`: runs the compiled server
