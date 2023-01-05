import React from 'react';


const Search = (props) => {

  // const [search, setSearch] = React.useState('title')

  return (
    <form onSubmit={(e) => props.searchFunc(e)} onChange={(e) => props.setSearch(e.target.value)}>
      <label>Enter a title:
        <input type="text"/>
      </label>
      <input type="submit" />
    </form>
  )
}



export default Search;