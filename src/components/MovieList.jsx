import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {movies.map((movie) => <MovieCard key={ movie } />)}
      </section>
    );
  }
}

export default MovieList;
