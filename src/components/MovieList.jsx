// implement MovieList component here
import React from 'react';

import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    const { title } = movies;
    return (
      <main className="movie-list">
        { movies.map((movie) => <MovieCard key={ title } movie={ movie } />) }
      </main>
    );
  }
}

export default MovieList;
