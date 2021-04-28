import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <img src={ imagePath } alt={ subtitle } />
        <p>{storyline}</p>
      </div>
    );
  }
}

export default MovieCard;
