import React from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
const { useState, useEffect } = React;
const App = (props) => {

  const allMovies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ]

  const [movies, setMovies] = useState(allMovies);
  const [search, setSearch] = useState('');

  const searchFunc = (e) => {
  e.preventDefault();
    console.log(search);
    console.log('SEARCHING')
    var terms = search.split(' ');
    var matching = [];
    for(let i = 0; i < movies.length; i++) {
      for(let j = 0; j < terms.length; j++) {
        if(movies[i].title.includes(terms[j])) {
          matching.push(movies[i])
        }
      }
    }
    console.log(matching);
    setMovies(matching);
    // debugger;
  }


  return (
    <div>
      <div>
        <Search searchFunc = {searchFunc} setSearch = {setSearch} search = {search}/>
      </div>
      <div>
        <MovieList movies = {movies}/>
      </div>
    </div>
  )
};

export default App;