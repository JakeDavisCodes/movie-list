import React from 'react';
import Movie from './Movie.jsx';

const MovieList = (props) => {


  return (
    <div className="list">
      {props.movies.map(movie => <Movie title={movie.title} />)}
    </div>
  )
}

export default MovieList;