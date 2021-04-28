import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div>
        <h4>{title}</h4>
        <img src={ imagePath } alt={ subtitle } />
      </div>
    );
  }
}

export default MovieCard;
