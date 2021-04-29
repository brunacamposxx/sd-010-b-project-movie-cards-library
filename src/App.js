import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <>
      <Header />
      <div className="movie-list">
        <MovieList movies={ movies } />
      </div>
    </>
  );
}

export default App;
