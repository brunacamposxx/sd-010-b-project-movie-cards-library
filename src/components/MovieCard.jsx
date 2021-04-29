import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

// Tive uma certa dificuldade no destruction desse componente, estavam retornando undefined, foi então que busquei orientação no repo do meu colega Thiago Marchini e consegui resolver o problema. link: https://github.com/tryber/sd-010-b-project-movie-cards-library/pull/1/commits/26933cbb96bac8f0c563a2533f83dca0dbc652ed

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div className="movie-card-body">
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.exact({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
