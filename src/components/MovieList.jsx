// implement MovieList component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from './MovieCard';

export class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      imagePath: PropTypes.string,
      storyline: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieList;
