import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    console.log(movies);
    return (
      <MovieCard />
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf({ }),
};

MovieList.defaultProps = {
  movies: { },
};

export default MovieList;
