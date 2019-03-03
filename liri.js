require("dotenv").config();

var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var moment = require('moment');
var axios = require("axios");
var fs = require('fs');

var spotify = new Spotify(keys.spotify);

var action = process.argv[2];
var input = process.argv.slice(3).join(" ");

// Command logic
if(action === "concert-this") {
    var URL = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
    concert(input);
    log();
    } // spotify-this-song
     else if (action === "spotify-this-song") {
        spotifyIt(input);
        log();
    } else if (action === "movie-this") {
        movie(input);
        log();
    } else if (action === "do-what-it-says") {
        doWhatItSays(input);
        log();
    }

    // Concert-this function
    function concert (input) {
        axios.get(URL).then(function(response) {
            console.log("Here's Your Results for: " + input);
            for(var i = 0; i < response.data.length; i++) {
                console.log(
                    "\nVenue: " + response.data[i].venue.name + 
                    "\nLocation: " +response.data[i].venue.city + ", " + response.data[i].venue.country +
                    "\nDates: " + moment(response.data[i].datetime).format("MMM, DD, YYYY") +
                    "\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    
                );  
            }
          }
        )
    }

    //Spotify-this-song function
    function spotifyIt (input) {
        if(!input) {
            input = "The Sign";
        }
        spotify.search({
            type: "track",
            query: input
        }, function (err,data) {
            if(err) {
                console.log(err);
            }
            console.log("Here's Your Results for: " + input);
            var songInfo = data.tracks.items;
	        console.log(
                "\nArtist(s): " + songInfo[0].artists[0].name +
	            "\nSong Name: " + songInfo[0].name +
	            "\nPreview Link: " + songInfo[0].preview_url +
                "\nAlbum: " + songInfo[0].album.name +
                "\n"
                );
        });
    };

    //Movie-this function
    function movie (input) {
        if (!input){
            input = 'Mr Nobody';
        }
        var omdb = "http://www.omdbapi.com/?t=" + input +  "&y=&plot=short&apikey=2a43d746"
        axios.get(omdb).then(
            function(response) {
                console.log("Here's Your Results for: " + input);
                console.log(
                    "\nTitle: " + response.data.Title +
                    "\nRelease Year: " + response.data.Year +
                    "\nIMDB Rating: " + response.data.imdbRating +
                    "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value +
                    "\nCountry: " + response.data.Country +
                    "\nLanguage: " + response.data.Language +
                    "\nPlot: " + response.data.Plot +
                    "\nActors: " + response.data.Actors +
                    "\n"
                );
            }); 
    }

    //Do-what-it-says function
    function doWhatItSays () {
        fs.readFile('random.txt', "utf8", function(err, data){
            if (err) {
                return console.log(err);
              }

            var splitString = data.split(",");
        
            if (splitString[0] === "spotify-this-song") {
                var songcheck = splitString[1].slice(1, -1);
                spotifyIt(songcheck);
            } else if (splitString[0] === "concert-this") {
                var artist_name = splitString[1].slice(1, -1);
                concert(artist_name);
            } else if(splitString[0] === "movie-this") {
                var movie_name = splitString[1].slice(1, -1);
                movie(movie_name);
            } 
            
          });
    };

    //Bonus appendFile
    function log() {
        fs.appendFile("log.txt", "\n" + action + ": '" + input + "',", function(err) {
            if (err) {
            console.log(err);
            }
        });
    }