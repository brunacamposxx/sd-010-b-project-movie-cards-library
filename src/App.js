import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header className="page-title" />
      <div id="body" className="movie-list">
        <MovieList className="movie-list" movies={ movies } />
      </div>
    </div>
  );
}

export default App;
