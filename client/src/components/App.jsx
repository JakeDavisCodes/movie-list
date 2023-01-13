import React from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'
const axios = require('axios');

const { useState, useEffect } = React;
const App = (props) => {

  var initMovies = [];

  const [allMovies, setAllMovies] = useState(initMovies)
  const [movies, setMovies] = useState(allMovies);
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');

  axios.get('http://localhost:3000/api/movies')
  .then(movies => {
    console.log(movies);
  })

  const showWatched = (e) => {
    let watched = [];
    for(let i = 0; i < allMovies.length; i++) {
      if(allMovies[i].watched === true) {
        watched.push(allMovies[i])
      }
    }
    setMovies(watched);
  }

  const showUnwatched = (e) => {
    let unwatched = [];
    for(let i = 0; i < allMovies.length; i++) {
      if(allMovies[i].watched === false) {
        unwatched.push(allMovies[i])
      }
    }
    setMovies(unwatched);
  }

  const setWatched = (title) => {
    // debugger;
    let editedAll = [];
    let editedCurr = [];

    for(let i = 0; i < allMovies.length; i++) {
      if(allMovies[i].title === title) {
        editedAll.push({title: title, watched: !allMovies[i].watched})
      } else { editedAll.push(allMovies[i]) }
    }
    for(let i = 0; i < movies.length; i++) {
      if(movies[i].title === title) {
        editedCurr.push({title: title, watched: !movies[i].watched})
      } else { editedCurr.push(movies[i]) }
    }
    setAllMovies(editedAll);
    setMovies(editedCurr);
  }

  const addMovie = (e) => {
    e.preventDefault();
    setAllMovies([...allMovies, {title: title, watched: false}]);
    setMovies([...allMovies, {title: title, watched: false}]);
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
        <button className="watchedButton" onClick={(e) => showWatched(e)}>
          Watched
        </button>
        <button className="watchedButton" onClick={(e) => showUnwatched(e)}>
          Unwatched
        </button>
      </div>
      <div id ="movielist">
        <MovieList movies = {movies} setWatched={setWatched}/>
      </div>
    </div>
  )
};

export default App;