// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { MovieInfo: { title } } = this.props;
    return (
      <h1>{ title }</h1>
    );
  }
}

export default MovieCard;
