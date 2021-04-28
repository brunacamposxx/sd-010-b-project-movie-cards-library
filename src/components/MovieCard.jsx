import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    console.log('MovieCard');
    return (
      <section>
        <div>
          <img src={ imagePath } alt={ subtitle } />
        </div>
        <div>{title}</div>
        <div>{subtitle}</div>
        <div>{storyline}</div>
        <div>{rating}</div>
      </section>
    );
  }
}

MovieCard.propTypes = PropTypes.shape({
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  imagePath: PropTypes.string,
}).isRequired;

export default MovieCard;
