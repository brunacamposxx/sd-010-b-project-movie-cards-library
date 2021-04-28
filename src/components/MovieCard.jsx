import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, imagePath, storyline, subtitle } } = this.props;
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
    rating: PropTypes.string,
  }).isRequired,
};
export default MovieCard;
