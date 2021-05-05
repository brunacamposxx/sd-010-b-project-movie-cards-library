import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { movie: {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
    } } = this.props;
    return (
      <section className="movie-card">
        <section className="movie-card-body">
          <img className="movie-card-image" src={ imagePath } alt={ title } />
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
        </section>
        <Rating rating={ rating } />
      </section>
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
