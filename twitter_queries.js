require('dotenv').config()
var Twitter = require('twitter');

// Requires a .env file containing these variables
var client = new Twitter({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_KEY_SECRET,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

console.log(process.env.API_KEY)

// This params will be filled in via API call
var params = {screen_name: 'nodejs'};

// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//     if (!error) {
//         console.log(response)
//     } else {
//         console.log(error)
//     }
// });

params = {
    q: 'Atlanta',
    lang: 'en',
    maxResults: '1'
}
// client.get('search/tweets', params, function(error, tweets, response) {
//     if (!error) {
//         console.log(tweets)
//     } else {
//         console.log(error)
//     }
// })

client.get('favorites/list', {}, function(error, tweets, response) {
    if (!error) {
        console.log("FAVORITES")
        console.log(tweets)
    } else {
        console.log(error)
    }
})