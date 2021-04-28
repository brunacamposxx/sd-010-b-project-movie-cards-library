import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section>
        <img src={ movie.imagePath } alt={ movie.title } />
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
      </section>
    );
  }
}

// title, subtitle, storyline, rating, imagePath

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.string, PropTypes.number).isRequired,
};

export default MovieCard;
