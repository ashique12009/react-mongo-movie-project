import { Card, CardContent, CardMedia, Container, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FilterSort from './FilterSort';
import FilterResult from './FilterResult';

const base_url = "http://localhost:8080";

const MovieList = ({ searchInput }) => {

    const [movieList, setMovieList] = useState([]);
    const [sort, setSort] = useState("");
    const [genre, setGenre] = useState("");

    // Fetch movies from API
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`${base_url}/movies`);
                setMovieList(response.data);
            } catch(e) {
                console.error(`Error fetching data: ${e}`);
            }
        }
        fetchMovies();
    }, []);

    // Display movies
    return (
        <>
            <FilterSort sort={sort} setSort={setSort} />
            <h2>Movie List</h2>
            {
                sort.length == 0 ? 
                (
                    <Grid container spacing={3}>
                    {
                        movieList.filter((value) => {
                            if (searchInput === "") {
                                return value;
                            }
                            else if (value.title.toLowerCase().includes(searchInput.toLowerCase())) {
                                return value;
                            }
                        }).map((movie) => (
                            <Grid item lg={3} key={movie._id}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={movie.poster ? movie.poster : 'https://placehold.co/600x400'} // Assuming movie has a posterUrl property
                                        alt={movie.title}
                                    />

                                    <CardContent>
                                        <div>Title: {movie.title}</div>
                                        <div>
                                            Genre:  
                                            {movie.genre.map((genre, index) => (
                                                <span key={index}>
                                                    {genre}{index < movie.genre.length - 1 ? ', ' : ''}
                                                </span>
                                            ))}
                                        </div>
                                        <div>Year: {movie.year}</div>
                                        <div>Rating: {movie.rating}</div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                    </Grid>
                )
                :
                (
                    <FilterResult movieList={movieList} sort={sort} />
                )
            }
        </>
    )
}

export default MovieList;