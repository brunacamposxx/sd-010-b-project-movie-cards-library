import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <main>
        { movies.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />
        )) }
      </main>
    );
  }
}

// Descobri que PropTypes.array não funciona
// então achei essa discução no github arreseito do arrayOf:  https://github.com/facebook/prop-types/issues/212
MovieList.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired,
};

export default MovieList;
