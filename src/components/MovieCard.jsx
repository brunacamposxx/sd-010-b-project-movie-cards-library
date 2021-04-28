import React from 'react';

import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, imagePath } } = this.props;
    return (
      <section>
        <h1>
          { title }
        </h1>
        <h5>
          { subtitle }
        </h5>
        <img src={ imagePath } alt="" />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(
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
