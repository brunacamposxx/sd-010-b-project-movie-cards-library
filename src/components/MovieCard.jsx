import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props.movie;

    return (
      <div>
        <img src={ imagePath } alt="imagePath" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={ this.props.movie.rating } />
      </div>
    );
  }
}

export default MovieCard;
