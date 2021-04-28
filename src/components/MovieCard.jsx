// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, imagePath, storyline } } = this.props;
    return (
      <section>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
