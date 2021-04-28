import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    console.log(imagePath);
    return (
      <div>
        <img src={ imagePath } alt="imagePath" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
      </div>
    );
  }
}

export default MovieCard;
