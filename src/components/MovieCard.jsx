// implement MovieCard component here
import React from 'react'
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieC extends React.Component {
    render() {
      const { movie } = this.props;
      // console.log(this)
      return (
        <div>
          <h4>{movie.title}</h4>
          <h5>{movie.subtitle}</h5>
          <p>{movie.storyline}</p>
          <img src={movie.imagePath} alt="Imagen de filme"/>
          <Rating rating={movie.rating} />
        </div>
      );
    }
  }
  
  MovieC.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      imagePath: PropTypes.string
    }).isRequired
  }

  export default MovieC