// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    // const { movie } = this.props;
    // const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div>
        <h1>MOvieCard</h1>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    substitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
