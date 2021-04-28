import React, { Component } from 'react';
import Rating from './Rating';
import '../App.css';

class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <img src={ imagePath } alt={ subtitle } />
        <p>{storyline}</p>
        <Rating className="rating" rating={ rating } />
      </div>
    );
  }
}

export default MovieCard;
