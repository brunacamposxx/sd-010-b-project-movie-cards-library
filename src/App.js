import React from 'react';
import './App.css';
import movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';
// import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList itemList={ movies } />
    </div>
  );
}

export default App;
