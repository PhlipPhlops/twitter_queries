require('dotenv').config()
let Twitter = require('twitter');

module.exports = class TwitterQueries {
    constructor() {
        // Requires a .env file containing these variables
        this.client = new Twitter({
            consumer_key: process.env.API_KEY,
            consumer_secret: process.env.API_KEY_SECRET,
            
            // Access only for acocunt keys
            access_token_key: process.env.ACCESS_TOKEN,
            access_token_secret: process.env.ACCESS_TOKEN_SECRET
        });
    }

    _handleError(error) {
        if (error) console.error(error);
    }

    getBookmarks() {
        return this.client.get('favorites/list', {})
            .then((tweet) => {
                return tweet;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    search(query, lang='en', maxResults=10) {
        var params = {
            q: query,
            lang: lang,
            maxResults: maxResults
        }

        this.client.get('search/tweets', params, (error, tweets, response) => {
            this._handleError(error);
            console.log(tweets);
        })
    }
}