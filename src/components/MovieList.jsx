import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { Movies } = this.props;
    return (
      <div>
        {Movies.map((movie, id) => <MovieCard id={ id } item={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
