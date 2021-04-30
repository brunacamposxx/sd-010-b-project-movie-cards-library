import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
// implement MovieCard component here
class MovieCard extends Component {
  render() {
    const {
      movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <div>
        <img scr={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{storyline}</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
