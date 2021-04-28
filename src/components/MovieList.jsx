import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <main>
        {movies.map((mov) => <MovieCard key={ mov.title } movie={ mov } />)}
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
};

MovieList.defaultProps = {
  movies: {
    title: 'title',
    subtitle: 'subtitle',
    storyline: 'storyline',
    imagePath: 'imagePath',
    rating: 5,
  },
};

export default MovieList;
