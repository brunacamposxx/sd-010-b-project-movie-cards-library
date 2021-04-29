import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';
import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList>
        { data.map((movie, index) => <MovieCard key={ index } />) }
      </MovieList>
    </div>
  );
}

export default App;
