import React, { Component } from 'react';
import movies from '../data';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating} = this.props.movies;

    return (
      <div>
        <img src={imagePath} alt={title}>
          
      </div>
    )
  }
}
export default MovieCard;
