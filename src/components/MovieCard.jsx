import React from 'react';
import Proptypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component { 
  render() {
    const { movie: { title, subtitle, storyline, imagePath } } = this.props;

    return (
      <section>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <img src={ imagePath } alt={ title } />
        <Rating />
      </section>
    );
  }
}

  MovieCard.propTypes = {
   movie: Proptypes.shape({
   title: Proptypes.string,
   subtitle: Proptypes.string,
   storyline: Proptypes.string,
   imagePath: Proptypes.string,
  }).isRequired,
};

export default MovieCard;
