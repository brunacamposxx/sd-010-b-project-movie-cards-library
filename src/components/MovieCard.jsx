// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { imagePath, title, subtitle } = this.props;
    return (
      <div>
        <img src={ imagePath } alt="Movie pic" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
      </div>
    );
  }
}

MovieCard.propTypes = {
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default MovieCard;
