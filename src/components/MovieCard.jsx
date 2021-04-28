// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { imagePath, title, subtitle, storyLine, rating } = this.props;
    return (
      <div>
        <img src={ imagePath } alt="Movie pic" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyLine}</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyLine: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default MovieCard;
