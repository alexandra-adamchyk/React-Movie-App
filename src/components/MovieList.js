import React from 'react';

//functional component
const MovieList = (props) => {
    const baseImgUrl500 = 'https://image.tmdb.org/t/p/w500';
    return (
        <>
        {props.movies.map((movie, index)=> <div>
            <img src={baseImgUrl500 + movie.poster_path} alt="movie"></img> 
            </div>)}
        </>
    )
}

export default MovieList;