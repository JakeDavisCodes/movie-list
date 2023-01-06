import React from 'react';
import Details from './Details.jsx'

const Movie = (props) => {

  const [hidden, setHidden] = React.useState(true)

  const stringy = () => {
    if(props.movie.watched) {
      return 'Watched!';
    } else {
      return 'Unwatched!';
    }
  }

  return (
    <div className = "movie">
      <h1 className = "movieTitle" onClick={() => {console.log(1), setHidden(!hidden)}}>
        {props.movie.title}
      </h1>
      <button id="watchedButton" onClick={() => {props.setWatched(props.movie.title)}}>
        {stringy()}
      </button>
      <Details movie={props.movie} hidden={hidden}/>
    </div>
  )
}

export default Movie;