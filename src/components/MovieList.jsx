import React, { Component } from 'react';
// import PropTypes from 'prop-types';
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
MovieList.propTypes = {
  // movies: PropTypes.array,
};
export default MovieList;
