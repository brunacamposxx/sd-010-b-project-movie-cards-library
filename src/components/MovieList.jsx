// implement MovieList component here

import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        { movies.map((movie) => (
          <MovieCard
            className="movie-card"
            key={ movie.title }
            movie={ movie }
          />))}
      </div>
    );
  }
}

export default MovieList;
