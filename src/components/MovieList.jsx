// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        {movies.map((movieInfo) => 
          <MovieCard key={ movieInfo.title } movie={ movieInfo } />)}
      </section>
    );
  }
}
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MovieList;
