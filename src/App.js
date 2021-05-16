import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';
import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
    </div>
  );
}

export default App;
