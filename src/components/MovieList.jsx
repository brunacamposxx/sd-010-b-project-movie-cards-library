// implement MovieList component here
import React from 'react';
import Movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section className="movie-list">
        { Movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </section>
    );
  }
}

export default MovieList;
