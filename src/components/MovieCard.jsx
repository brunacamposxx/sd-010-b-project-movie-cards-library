// implement MovieCard component here
import React from 'react';
import movies from '../data';

class MovieCard extends React.Component {
  render() {
    return (
      <span>
        Hello
        { movies }
      </span>);
  }
}

export default MovieCard;
