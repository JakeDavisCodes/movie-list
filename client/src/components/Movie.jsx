import React from 'react';


const Movie = (props) => {

  const stringy = () => {
    if(props.movie.watched) {
      return 'Watched!';
    } else {
      return 'Unwatched!';
    }
  }

  return (
    <div className = "movie">
      <h1 className = "movieTitle">
        {props.movie.title}
      </h1>
      <button id="watchedButton" onClick={() => {props.setWatched(props.movie.title)}}>
        {stringy()}
      </button>
    </div>
  )
}

export default Movie;