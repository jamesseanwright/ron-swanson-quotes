# 1.5

* Since there are some existing consumers of the API, I have deprecated the original response format. For now, it is still served at `/quotes`. It will be removed in version 2, which will be released when interested consumers have migrated

* The changes that you made in your pull request are now served at `/v2/quotes` and `/v2/quotes/<count>`. When version 2 of the API is released, `/v2` will remain as an optional prefix and the new response format will be served by the existing `/quotes` endpoint

* As opposed to an array of `quote` objects, the v2 endpoints return string arrays; this results in a lighter payload and is easier to manipulate upon iteration

* Requests for multiple quotes return a unique array. As a result, if a user requests more quotes than are available, then every possible quote is returned. A limit and/or `quotes/all` endpoint may be considered for version 2.