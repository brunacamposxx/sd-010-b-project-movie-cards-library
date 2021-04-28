import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title } } = this.props;
    return (
      <div className="movie-card">
        { title }
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object,
  title: PropTypes.string,
};

export default MovieCard;
