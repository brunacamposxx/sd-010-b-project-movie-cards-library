import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: {
      title,
      rating,
      subtitle,
      storyline,
      imagePath } } = this.props;
    return (
      <li>
        <img src={ imagePath } alt={ title } />
        <h4>
          {title}
        </h4>
        <h5>
          {subtitle}
        </h5>
        <p>
          {storyline}
        </p>
        <div>
          <Rating rating={ rating } />
        </div>
      </li>
    );
  }
}

MovieCard.propTypes = ({
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
}).isRequired;

export default MovieCard;
