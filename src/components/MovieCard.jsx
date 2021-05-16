import React from 'react';
import movies from '../data';

class MovieCard extends React.Component {
  render() {
    return (
      <span>
        { movies }
      </span>
    );
  }
}

export default MovieCard;
// implement MovieCard component here
