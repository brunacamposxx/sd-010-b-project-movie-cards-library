import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        <h2>Movie List</h2>
        { movies.map((movie) => <MovieCard movies={ movie } key={ movie.title } />) }
      </div>
    );
  }
}

export default MovieList;
