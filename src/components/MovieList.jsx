import React from 'react';
import MovieCard from './MovieCard';


class MovieList extends React.Component {
  render() {
    return (
      movies.map((movies) => (
        <MovieCard movie={ movie } key={ movie.title } />
      ))
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
// implement MovieList component here
