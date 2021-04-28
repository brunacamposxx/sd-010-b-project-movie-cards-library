import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div>
        { title }
        <img src={ imagePath } alt={ subtitle } />
      </div>
    );
  }
}

export default MovieCard;
