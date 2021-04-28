import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
        <section>
        {movies.map(movie => <MovieCard movie={movie}/>)}
        </section>
    )
  }
};

export default MovieList;
