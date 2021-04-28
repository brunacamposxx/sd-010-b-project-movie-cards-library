import React from 'react';
import PropTypes from 'prop-types';
import movies from '../data';
// import Rating from './Rating';

class MovieCard extends React.Component {
  render () {
    const { movie } = this.props;

    return (      
      <div className='MovieCard'>
        <img src = {movie.imagePath} />
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        {/* <h5>{ Rating }</h5> */}
      </div> 
    );
  }
}

movies.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,  
};

export default MovieCard;
