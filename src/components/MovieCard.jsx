import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <section>
        <img src={ imagePath } alt={ title } />
        <div>
          <h4>{ title }</h4>
          <h5>{ subtitle }</h5>
        </div>
        <div>
          <p>{ storyline }</p>
        </div>
        <Rating rating={ rating } />
      </section>

    );
  }
}

export default MovieCard;
