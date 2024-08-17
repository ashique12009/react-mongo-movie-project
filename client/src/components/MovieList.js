import { Card, CardContent, CardMedia, Container, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const base_url = "http://localhost:8080";

const MovieList = ({ searchInput }) => {

    const [movieList, setMovieList] = useState([]);
    console.log(searchInput);

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
            <h2>Movie List</h2>
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
                                    <div>Genre: {movie.genre}</div>
                                    <div>Year: {movie.year}</div>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}

export default MovieList;