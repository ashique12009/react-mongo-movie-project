import React from 'react'
import MovieList from '../MovieList';
import { Container } from '@mui/material';

const Home = ({ searchInput }) => {
    return (
        <Container maxWidth="lg">
            <div className='home-container'>Home</div>
            <MovieList searchInput={searchInput} />
        </Container>
    )
}

export default Home;