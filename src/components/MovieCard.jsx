import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { item: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <section>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <img src={ imagePath } alt={ title } />
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
