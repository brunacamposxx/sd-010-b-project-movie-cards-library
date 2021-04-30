// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    // movie vem de map, logo vou renderizado por aqui
    const { movies } = this.props;
    return (
      <>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </>
    );
  }
}
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })).isRequired,
};
export default MovieList;
