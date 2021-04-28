import React from 'react';
import './App.css';
import Header from './components/Header';
import movies from './data';
import MovieList from './components/MovieList';
// import Rating from '.components/Rating';

class App extends React.Component {
  render() {
    return (
      <div>
      <Header />
      <MovieList movies = { movies }/>
      </div>
    );
  }
}

export default App;
