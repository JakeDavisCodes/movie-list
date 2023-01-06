import React from 'react';

const Details = (props) => {
  if(props.hidden) {
    return(
      <div></div>
    )
  }

  return (
    <div className="details">
      <h1 className="detail">Release Year: {props.movie.year || 'N/A'}</h1>
      <h1 className="detail">Director: {props.movie.director || 'N/A'}</h1>
      <h1 className="detail">Runtime: {props.movie.runtime || 'N/A'}</h1>
      <h1 className="detail">Score: {props.movie.score || 'N/A'}</h1>
    </div>
  )
}


export default Details;