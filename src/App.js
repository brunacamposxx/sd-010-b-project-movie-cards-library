import React from 'react';
import Data from './data';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ Data } />
    </div>
  );
}

export default App;
