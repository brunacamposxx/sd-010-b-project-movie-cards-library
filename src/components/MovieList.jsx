import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        { movies
          .map((theMovie) => <MovieCard key={ theMovie.title } movie={ theMovie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string.isRequired,
    map: PropTypes.func,
  }).isRequired,
};

export default MovieList;
