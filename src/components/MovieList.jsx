import React, { Component } from 'react';
import MovieCard from './MovieCard'

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((movie, index) => <MovieCard key={ movie.title } movie={ movie } />)
    );
  }
}

export default MovieList;
