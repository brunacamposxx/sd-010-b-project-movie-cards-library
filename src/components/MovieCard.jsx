// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, imagePath } } = this.props;
    return (
      <div key={ title }>
        <img src={ imagePath } alt={ `Capa do filme ${title}: ${subtitle}` } />
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
