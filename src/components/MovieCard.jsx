// implement MovieCard component here
import React from 'react';
// import movies from '../data';

class MovieCard extends React.Component {
  render() {
    const title = this.props.title;
    return <li>{title}</li>;
  }
}

export default MovieCard;
