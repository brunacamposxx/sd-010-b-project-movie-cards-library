import React from 'react';
// import Proptypes from 'prop-types';
import Movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movieList={ Movies } />
    </div>
  );
}

export default App;
