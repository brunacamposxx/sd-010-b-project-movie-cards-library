import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <Rating />
      </div>
    );
  }
}

export default MovieCard;
