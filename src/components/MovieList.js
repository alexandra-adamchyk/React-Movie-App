import React from 'react';

//function component, returns list of movies,
//for each of the movies we render a div
//inside a div is an image tag, which displays the movie poster  
const MovieList = (props) => {
    const baseImgUrl500 = 'https://api.themoviedb.org/3/movie/{movie_id}/images';
    return (
        <>
        {props.movies.map((movie, index)=> 
            <div>
            {/* <img src={baseImgUrl500 + movie.poster_path} alt="movie"></img>  */
            <img src={movie.Id} alt='movie'></img>}
            </div>)}
        </>
    )
}

export default MovieList;