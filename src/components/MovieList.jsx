import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <ol className="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </ol>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf().isRequired,
};

export default MovieList;
