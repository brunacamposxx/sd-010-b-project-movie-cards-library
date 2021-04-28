// implement MovieList component here
import React from 'react';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return <MovieList movies={ movies } />;
  }
}

export default MovieList;
