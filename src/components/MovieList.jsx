import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

import '../css/MovieList.css';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="list">
        { movies.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />)) }
      </div>
    );
  }
}

// PropTypes: tipagem das props do componente
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      imagePath: PropTypes.string,
      rating: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieList;
