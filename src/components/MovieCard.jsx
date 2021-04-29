import React from 'react';
import Proptypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;

    return (
      <section className="movie-card">
        <h4 clasName="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <p className="movie-card-storyline">{ storyline }</p>
        <Rating clasName="movie-card-rating" rating={ rating } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: Proptypes.shape({
    title: Proptypes.string,
    subtitle: Proptypes.string,
    storyline: Proptypes.string,
    imagePath: Proptypes.string,
    rating: Proptypes.number,
  }).isRequired,
};

export default MovieCard;
