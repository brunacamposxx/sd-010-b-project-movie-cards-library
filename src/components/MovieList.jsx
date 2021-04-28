import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        <ul>
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </ul>
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

MovieList.defaultProps = {
  movies: {},
};

export default MovieList;
