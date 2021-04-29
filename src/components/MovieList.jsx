// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {movies.map((movie) => (<MovieCard key={ movie.title } movie={ movie } />))}
      </div>
    );
  }
}

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default MovieList;
