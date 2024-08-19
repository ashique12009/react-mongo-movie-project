import { Card, CardContent, CardMedia, Grid } from '@mui/material';
import React from 'react';

const FilterResult = ({ movieList, sort }) => {
    const [...sortByYear] = movieList;
    const [...sortByRating] = movieList;

    console.log('movieList', movieList);
    sortByYear.sort((a, b) => a.year - b.year);
    console.log('sortByYear', sortByYear);

    return (
        <Grid container spacing={3}>
            {
                sort ?
                (
                    <>
                        {
                            sort === 'year' ?
                            (
                                sortByYear.map((movie) => (
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
                            ):
                            (
                                <>HERE</>
                            )
                        }
                    </>
                )
                :
                (
                    movieList.map((item) => (
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
                )
            }
        </Grid>
    )
}

export default FilterResult;