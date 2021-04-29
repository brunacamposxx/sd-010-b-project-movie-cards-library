// implement MovieCard component here
import React from 'react';
// import movies from '../data';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return <img source={movie.imagePath} />
  
  }
}

export default MovieCard;
