import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <section>
        <div>
          <img src={ imagePath } alt={ `${title} ${subtitle}` } />
        </div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating key={ title } rating={ rating } />
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
