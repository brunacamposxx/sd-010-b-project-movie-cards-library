import React from 'react';
import MovieCard from './MovieCard';
import Movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <>
        {Movies.map((movie, id) => <MovieCard key={ id } item={ movie } />)}
      </>
    );
  }
}

export default MovieList;
