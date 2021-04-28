import React from 'react';

import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies: { title, imagePath } } = this.props;
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
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.string,
      imagePath: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieCard;
