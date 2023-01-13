import React from 'react';
import Details from './Details.jsx'

const Movie = (props) => {

  const [hidden, setHidden] = React.useState(true)

  return (
    <div className = "movie">
      <h1 className = "movieTitle" onClick={() => {console.log(1), setHidden(!hidden)}}>
        {props.movie.title}
      </h1>
      <Details movie={props.movie} hidden={hidden} setWatched={props.setWatched}/>
    </div>
  )
}

export default Movie;