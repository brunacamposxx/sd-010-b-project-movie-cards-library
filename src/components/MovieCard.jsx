import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies: { imagePath, title, subtitle, storyline } } = this.props;
    return (
      <section>
        <img src={ imagePath } alt="" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        {/* <Rating /> */}
      </section>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
