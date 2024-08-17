import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    title: {
        type: String,
    },
    year: {
        type: String,
    },
    genre: [
        {
            type: String
        }
    ],
    rating: [
        {
            type: Number
        }
    ],
    poster: {
        type: String,
    },
    originalRating: {
        type: Number
    },
    actors: [
        {
            type: String
        }
    ],
    imdbRating: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Movie = mongoose.model('Movie', movieSchema);
export default Movie;