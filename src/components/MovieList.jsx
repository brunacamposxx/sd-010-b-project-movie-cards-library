// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard'
import PropTypes from 'prop-types'

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
      {this.props.movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)}
      </div>
    );  
  };
};

MovieList.propTypes = {
  movies: PropTypes.array,
}

export default MovieList;
