// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    // const { movies } = this.props;
    const { movie: { title, subtitle, storyline, imagePath} } = this.props;
    return (
      <div>
        <img src={ imagePath } alt="Filme" />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};
export default MovieCard;
