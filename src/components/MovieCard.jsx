import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;

    return (
      <div className="movie-card movie-card-body">
        <img src={ imagePath } alt={ subtitle } className="movie-card-image" />
        <h4 className="movie-card-title">
          { title }
        </h4>
        <h5 className="movie-card-subtitle">
          { subtitle }
        </h5>
        <p className="movie-card-storyline">
          { storyline }
        </p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

// Nessa parte eu não consegui sozinho e assim, ao consultar o repositório de um amigo, consegui ver o que precisava ser feito e também consegui uma fonte de pesqisa
// Fonte: https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
