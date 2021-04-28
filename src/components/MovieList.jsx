import React from 'react';
import data from '../data';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return movies;
  }
}

// MovieList.prototype {};

export default MovieList;
