import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    const comp = movies.map((mov, index) => <MovieCard key={ index } movie={ mov } />);
    return comp;
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf({ }),
};

MovieList.defaultProps = {
  movies: { },
};

export default MovieList;
