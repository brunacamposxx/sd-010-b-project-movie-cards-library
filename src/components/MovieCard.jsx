// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      React.createElement('div', { className: 'movie-card' },
        React.createElement('img', { className: 'movie-card-image',
          src: movie.imagePath,
          alt: 'movie poster',
        }),
        React.createElement('div', { className: 'movie-card-body' },
          React.createElement('h4',
            {
              className: 'movie-card-title',
            }, movie.title),
          React.createElement('h5',
            {
              className: 'movie-card-subtitle',
            }, movie.subtitle),
          React.createElement('p',
            {
              className: 'movie-card-storyline',
            }, movie.storyline),
          React.createElement(Rating,
            {
              rating: movie.rating,
            })))
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
