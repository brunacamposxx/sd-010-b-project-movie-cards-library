// implement MovieCard component here

import React from 'react';
import MovieList from './MovieList';
// import Data from '../data';

class MovieCard extends React.Component {
  render() {
    return (
      <MovieList>
        <MovieCard />
      </MovieList>
    );
  }
}

export default MovieCard;
