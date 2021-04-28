// implement MovieList component here
import React, { Component } from 'react';
import { MovieCard } from './MovieCard';
import PropTypes from 'prop-types';

export class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie, key) => <MovieCard key={ key } movie={ movie } />)}
      </div>
    )
  };
}

MovieList.PropTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;
