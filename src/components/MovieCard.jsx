import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

import '../css/MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;

    return (
      <section className="card">
        <img src={ imagePath } alt="movie cartaz" />

        <h4>
          { title }
        </h4>

        <h5>
          { subtitle }
        </h5>

        <p>
          { storyline }
        </p>

        <section className="container-rating">
          <Rating rating={ rating } />
        </section>
      </section>
    );
  }
}

// PropTypes: tipagem das props do componente
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
