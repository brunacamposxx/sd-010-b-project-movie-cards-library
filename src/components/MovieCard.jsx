// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { imagePath } = this.props;
    return (
      <div>
        <img src={ imagePath } alt="Movie pic" />
      </div>
    );
  }
}

MovieCard.propTypes = {
  imagePath: PropTypes.string.isRequired,
};

export default MovieCard;
