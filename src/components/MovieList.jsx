import PropTypes from 'prop-types';
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <ol>
        { movies.map((movie, key) => <MovieCard key={ key.title } movie={ movie } />) }
      </ol>
    );
  }
}
MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
export default MovieList;
