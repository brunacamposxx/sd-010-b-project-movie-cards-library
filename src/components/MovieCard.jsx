import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <h2>
        { title }
      </h2>
    );
  }
}

export default MovieCard;
