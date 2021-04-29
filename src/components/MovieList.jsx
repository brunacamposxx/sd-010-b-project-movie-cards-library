import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

import '../App.css';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main>
        <div className="movie-list">
          {movies.map((movie, index) => (
            <MovieCard key={ `Movie Title ${index + 1}` } movie={ movie } />
          ))}
        </div>
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default MovieList;
