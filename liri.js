require("dotenv").config();

// require
var keys = require("./keys.js");
var request = require("request");
var Twitter = require("twitter");
var spotify = require("spotify");
var fs = require('fs');

var cmd = process.argv [2];

var spotify = new spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
})

var nodeArgs = process.argv;

if (nodeArgs [1] === "spotify-this-song") {

var spotifyPrompt = inquirer.prompt()

inquirer.prompt([
{
    type: "input",
    name: "spotify search",
    message: "What song would you like to search for?",
}]).then(function(response) {
    spotify.search({
        type: "track",
        query: response.song,
        limit: 1
    })
}

)

}
