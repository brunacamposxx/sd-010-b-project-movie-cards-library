import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((movie) => <MovieCard key={ movie.title } movies={ movie } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    propTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      rating: PropTypes.number,
      image: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieList;
