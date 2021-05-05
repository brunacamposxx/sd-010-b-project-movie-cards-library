import React from 'react';
// import movies from '../data';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, imagePath } = movie;
    return (
      <section>
        <img src={ imagePath } alt={ title } />
      </section>
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
