import React from 'react'
import MovieList from '../MovieList';

const Home = ({ searchInput }) => {
    return (
        <>
            <div className='home-container'>Home</div>
            <MovieList searchInput={searchInput} />
        </>
    )
}

export default Home;