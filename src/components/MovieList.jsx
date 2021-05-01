// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import Movies from '../data';
class MovieList extends React.Component {
  render() {
    return (
      <div>
        { Movies.map((movie => < MovieCard key={ movie.title } movies= {movie} />)) }
      </div>
    )
  }
}

export default MovieList;
