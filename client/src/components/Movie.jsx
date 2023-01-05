import React from 'react';


const Movie = (props) => {



  return (
    <div className = "movie" onClick={() => {console.log(1), props.setWatched(props.movie.title)}}>
      <h1 className = "movieTitle">
        {props.movie.title}
      </h1>
      <h1>
        watched: {JSON.stringify(props.movie.watched)}
      </h1>
    </div>
  )
}

export default Movie;