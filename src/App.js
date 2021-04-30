import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Data from './data';

function App() {
  return (
    <div className="App">
      <div className="movie-card-header page-title">
        <Header />
      </div>
      <MovieList movies={ Data } />
    </div>
  );
}

export default App;
