// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import Rating from './Rating'
import movies from '../data'

class MovieList extends React.Component {
  render() {
    return (
      <div>
        { movies.map(movie => <MovieCard movie = {movie} />) }
        { movies.map(movie => <Rating movie = {movie} />) }
      </div>
    );
  }
}

export default MovieList;
