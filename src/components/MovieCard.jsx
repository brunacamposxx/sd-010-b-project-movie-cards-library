import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    console.log(movie);
    return (
      <section />
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf({ }),
};

MovieCard.defaultProps = {
  movie: { },
};

export default MovieCard;
