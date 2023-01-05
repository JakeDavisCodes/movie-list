import React from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'

const { useState, useEffect } = React;
const App = (props) => {

  var initMovies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ]

  const [allMovies, setAllMovies] = useState(initMovies)
  const [movies, setMovies] = useState(allMovies);
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');

  const addMovie = (e) => {
    e.preventDefault();
    setAllMovies([...allMovies, {title: title}]);
    setMovies([...allMovies, {title: title}]);
  }

  const searchFunc = (e) => {
    e.preventDefault();
    var terms = search.split(' ');
    var matching = [];
    for(let i = 0; i < allMovies.length; i++) {
      for(let j = 0; j < terms.length; j++) {
        if(allMovies[i].title.includes(terms[j])) {
          matching.push(allMovies[i])
        }
      }
    }
    setMovies(matching);
    // debugger;
  }


  return (
    <div>
      <div>
        <AddMovie addMovie = {addMovie} setTitle = {setTitle}/>
      </div>
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