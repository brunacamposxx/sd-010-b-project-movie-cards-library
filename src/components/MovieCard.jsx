import React from 'react';
// import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { key, subtitle, storyline, imagePath } = this.props;
    return (
      <section className="movie-card">
        <img src={ imagePath } alt="movie poster" />
        <h4>{key}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
      </section>
    );
  }
}

MovieCard.propTypes = {
  key: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: PropTypes.string,
}.isRequired;

export default MovieCard;
