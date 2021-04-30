import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <main>
        {movies.map((m, k) => <MovieCard key={ `Movie Title ${k + 1}` } movie={ m } />)}
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      start: PropTypes,
    }),
  ).isRequired,
};

export default MovieList;
