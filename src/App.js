import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';
import Rating from './components/Rating';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies />
      <MovieCard />
      <Rating />
    </div>
  );
}

export default App;
