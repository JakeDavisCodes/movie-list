import React from 'react';


const AddMovie = (props) => {

  // const [search, setSearch] = React.useState('title')

  return (
    <form onSubmit={(e) => props.addMovie(e)} onChange={(e) => props.setTitle(e.target.value)}>
      <label>Enter a movie:
        <input className="field" type="text"/>
      </label>
      <input className="button" type="submit" />
    </form>
  )
}



export default AddMovie;