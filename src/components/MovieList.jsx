// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <ol>
        {MovieCard}
      </ol>
    );
  }
}
export default MovieList;
