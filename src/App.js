import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from './components/MovieList';

const App = () => {
//usestate object holds the movies results we comeback from a search
  const [movies, setMovies] = useState([{ 
    "adult": false,
    "backdrop_path": "/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg",
    "genre_ids": [
        12,
        28,
        878
    ],
    "id": 11,
    "original_language": "en",
    "original_title": "Star Wars",
    "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
    "popularity": 432.897,
    "poster_path": "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    "release_date": "1977-05-25",
    "title": "Star Wars",
    "video": false,
    "vote_average": 8.203,
    "vote_count": 20004
},
{
    "adult": false,
    "backdrop_path": "/epVMXf10WqFkONzKR8V76Ypj5Y3.jpg",
    "genre_ids": [
        12,
        28,
        878
    ],
    "id": 181808,
    "original_language": "en",
    "original_title": "Star Wars: The Last Jedi",
    "overview": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
    "popularity": 86.099,
    "poster_path": "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
    "release_date": "2017-12-13",
    "title": "Star Wars: The Last Jedi",
    "video": false,
    "vote_average": 6.804,
    "vote_count": 14852
},
{
    "adult": false,
    "backdrop_path": "/k6EOrckWFuz7I4z4wiRwz8zsj4H.jpg",
    "genre_ids": [
        12,
        28,
        878
    ],
    "id": 140607,
    "original_language": "en",
    "original_title": "Star Wars: The Force Awakens",
    "overview": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
    "popularity": 93.88,
    "poster_path": "/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg",
    "release_date": "2015-12-15",
    "title": "Star Wars: The Force Awakens",
    "video": false,
    "vote_average": 7.282,
    "vote_count": 18921
}]) 
  return (
  <div className="ccontaier-fluid">
    
    <MovieList movies = {movies} />
  </div>
);
};

export default App;
