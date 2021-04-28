import React from 'react';
// import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { key, subtitle, storyline, imagePath } = this.props;
    return (
      <section className="movie-card">
        <img src={ imagePath } alt="movie poster" />
        <h3>{key}</h3>
        <p>{subtitle}</p>
        <p>{storyline}</p>
      </section>
    );
  }
}

MovieCard.propTypes = {
  key: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  // rating: PropTypes.string.isRequired,
};

export default MovieCard;
