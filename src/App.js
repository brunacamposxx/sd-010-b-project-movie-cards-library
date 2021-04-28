import React from 'react';
import './App.css';

import dataMovies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ dataMovies } />
    </div>
  );
}

export default App;
