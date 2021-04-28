import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    const renderMovieCard = movies.map((movie) => (<MovieCard
      movie={ movie }
      key={ movie.title }
    />));
    return (
      renderMovieCard
    );
  }
}

export default MovieList;
