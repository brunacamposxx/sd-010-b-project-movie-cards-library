import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { key } = this.props;
    const { movie } = this.props;
    return (
      <div>
        <img src={ movie.imagePath } alt="" />
        <h4>{ key }</h4>
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyline }</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  key: PropTypes.string.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
