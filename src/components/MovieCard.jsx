// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const {
      movie: {
        title,
        subtitle,
        storyline,
        imagePath,
        rating,
      },
    } = this.props;
    return (
      <section>
        <header>
          <img style={ { width: '90px' } } src={ imagePath } alt="Movie" />
        </header>
        <main>
          <h4>{ title }</h4>
          <h5>{ subtitle }</h5>
          <p>{ storyline }</p>
        </main>
        <footer>
          <Rating rating={ rating } />
        </footer>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
