// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return <img src={movie.imagePath} alt=""/>
  }
}

export default MovieCard;