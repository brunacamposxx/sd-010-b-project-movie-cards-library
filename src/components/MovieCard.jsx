import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, imagePath, storyline, subtitle, rating } } = this.props;
    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>
          { subtitle }
        </h5>
        <p>
          { storyline }
        </p>
        <div>
          { rating }
        </div>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    subtitle: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};
export default MovieCard;
