import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    const comp = movies.map((mov, index) => <MovieCard key={ index } movie={ mov } />);
    return (
      <main>
        <h1>Componente MovieList</h1>
        {comp}
      </main>);
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf({ }),
};

MovieList.defaultProps = {
  movies: { },
};

export default MovieList;
