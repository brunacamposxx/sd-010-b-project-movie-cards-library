import React from 'react';

import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { MovieInfo: { title, imagePath } } = this.props;
    return (
      <section>
        <h1>
          { title }
        </h1>
        <img src={ imagePath } alt="" />
      </section>
    );
  }
}

MovieCard.propTypes = {
  MovieInfo: PropTypes.isRequired,
};

export default MovieCard;
