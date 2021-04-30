// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
// import movies from '../data';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div>
        {movies.map((movie) => (<MovieCard key={ movie.title } movie={ movie } />))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      imagePath: PropTypes.string,
      rating: PropTypes.number,
    }),
  ).isRequired,
};

export default MovieList;
