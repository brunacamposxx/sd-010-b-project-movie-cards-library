import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, imagePath, storyline } } = this.props;
    return (
      <div>
        <h4>
          {title}
        </h4>
        <h5>
          {subtitle}
        </h5>
        <p>{storyline}</p>
        <img src={ imagePath } alt={ title } />
      </div>
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
