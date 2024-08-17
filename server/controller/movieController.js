import Movie from "../model/movieSchema.js";

const getAllMovies = async (request, response) => {
    try {
        const movies = await Movie.find({});
        if (movies.length == 0) {
            return response.status(200).json({message: "No movie found"});
        }
        return response.status(200).json(movies);
    } catch (error) {
        console.log('Internal server error', error);
    }
}

export default getAllMovies;
