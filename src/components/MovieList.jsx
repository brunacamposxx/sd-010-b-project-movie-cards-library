import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <div className = "MovieList">
        {movies.map((movie, index) => 
          <MovieCard movie={ movies } key={ movies[index].title } />)}
      </div>
    );
  }
}

movies.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieList;
