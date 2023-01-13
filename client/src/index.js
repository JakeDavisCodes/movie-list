import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
const axios = require('axios');

// axios.get('http://localhost:3000/api/movies')
//   .then(movies => {
//     console.log('AXIOS RESPONSE: ', movies);
//     ReactDOM.render(<App movies = {movies}/>, document.getElementById('app'));
//   })
//   .catch(err => {
//     console.error(err);
//   })
  ReactDOM.render(<App />, document.getElementById('app'));