import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

App.propType = {
  movies: PropTypes.array,
};

export default App;
