

require("dotenv").config();

var spotify = new Spotify(keys.spotify);


var Spotify = require('node-spotify-api');

var moment = require('moment');

var axios = require("axios");



var command = process.argv[2];
var input = process.argv[3];

// concert-this
if(command === "concert-this") {
    var URL = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
    concert(input);
    } // spotify-this-song
     else if (command === "spotify-this-song") {
        spotifyIt(input);
    } else if (command === "movie-this") {
        movie(input);
    } else if (command === "do-what-it-says") {
        doIt(input);
    }

    function concert (input) {
        axios.get(URL).then(function(response) {
            console.log("Results: ");
            for(var i = 0; i < response.data.length; i++) {
                console.log(
                    "\nDates: " + moment(response.data[i].datetime).format("MMM, DD, YYYY"),
                    "\nLocation: " + response.data[i].venue.name + ", " + response.data[i].venue.city + ", " + response.data[i].venue.country,
                    "\nURL: " + response.data[i].url
    
                );
            }
          }
        )
    }

