# Liri Node app

LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## Instructions

### 1. Type the following command into your terminal/bash: `node Liri.js concert-this <band name here>`

- Using Bands in Town Artist Events API this will display the following information about each event to the terminal/bash window:

  1. Name of the venue

  1. Venue location

  1. Date of the Event

### 2. Type the following command into your terminal/bash: `node Liri.js spotify-this-song '<song name here>'`

- Using node-spotify-API this will display the following information about the song in terminal/bash window

  1. Artist(s)

  1. The song's name

  1. A preview link of the song from Spotify

  1. The album that the song is from

### 3. Type the following command into your terminal/bash: `node Liri.js movie-this '<movie name here>'`

- Using OMDB API This will display the following information to your terminal/bash window:

    1. Title of the movie.
    1. Year the movie came out.
    1. IMDB Rating of the movie.
    1. Rotten Tomatoes Rating of the movie.
    1. Country where the movie was produced.
    1. Language of the movie.
    1. Plot of the movie.
    1. Actors in the movie.

### 4. Type the following command into your terminal/bash: `node Liri.js do-what-it-says`

- This will take the command in the random.txt and then use it to call one of above commands.