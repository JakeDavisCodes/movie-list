import React from 'react';
import Movie from './Movie.jsx';

const MovieList = (props) => {


  return (
    <div className="list">
      {props.movies.map(movie => <Movie movie={movie} setWatched={props.setWatched}/>)}
    </div>
  )
}

export default MovieList;