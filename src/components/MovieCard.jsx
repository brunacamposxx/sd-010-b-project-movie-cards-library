// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
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
      <section className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <section className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
        </section>
        <section className="movie-card-rating">
          <Rating rating={ rating } />
        </section>
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
