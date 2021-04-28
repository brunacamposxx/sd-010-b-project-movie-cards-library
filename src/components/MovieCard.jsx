import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component { // REQUISITO 6
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;

    return (
      <section>
        <div>
          {/* REQUISITO 7 */}
          <img src={ imagePath } alt={ title } />
          {/* REQUISITO 8 */}
          <h4>{ title }</h4>
          {/* REQUISITO 9 */}
          <h5>{ subtitle }</h5>
          {/* REQUISITO 10 */}
          <p>{ storyline }</p>
        </div>
        <div>
          {/* REQUISITO 13 e 14 */}
          <Rating rating={ rating } />
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = { // REQUISITO 17
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
