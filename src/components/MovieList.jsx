import React, { Component } from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <div>
        {movies.map((movie) => <MovieCard movie={movies} key={movies.title} />)}
      </div>
    );
  }
}

export default MovieList;
