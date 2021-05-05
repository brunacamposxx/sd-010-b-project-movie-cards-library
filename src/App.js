import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

// import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="body" className="movie-list">
        <MovieList movie={ movies } />
      </div>
    </div>
  );
}

export default App;
