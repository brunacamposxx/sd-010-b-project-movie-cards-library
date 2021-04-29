// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <ol>
        {movies.map((item) => <MovieCard movie={ item } key={ item.title } />)}
      </ol>
    );
  }
}
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      movies: PropTypes.string,
    }),
  ).isRequired,
};
export default MovieList;
