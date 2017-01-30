var movies = [
    {
        title: "American Honey",
        hasWatched: true,
        rating: 5
    },
    {
    	title: "Rogue One",
    	hasWatched: true,
    	rating: 4
    },
    {	title: "Hidden Figures",
    	hasWatched: false,
    	rating: 4
    },
    {
    	title: "Sausage Party",
    	hasWatched: false,
    	rating: 3
    },
    {
    	title: "La La Land",
    	hasWatched: true,
    	rating: 4
    }
    ]

        function buildString(movie) {
        var result = "You have ";
        if(movie.hasWatched){
            result += "watched ";
        } else {
            result += "not seen ";

        }
        result += "\"" + movie.title + "\" - ";
        result += movie.rating + " stars";
        return result;

    }
        movies.forEach(function(movie) {
        console.log(buildString(movie))

        
    });