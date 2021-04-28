import React from 'react';
import './App.css';
import Header from './components/Header';
import movies from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header className="movie-card-header" />
      <MovieList className="movie-list" movies={ movies } />
    </div>
  );
}

export default App;
