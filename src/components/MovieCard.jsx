// implement MovieCard component here
import React from 'react';
import ProtoTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <section className="movie-card">
        <img src={ imagePath } alt={ title } className="movie-card-image" />
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <Rating rating={ rating } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: ProtoTypes.shape({
    title: ProtoTypes.string,
    subtitle: ProtoTypes.string,
    storyline: ProtoTypes.string,
    rating: ProtoTypes.number,
    imagePath: ProtoTypes.string,
  }).isRequired,
};

export default MovieCard;
