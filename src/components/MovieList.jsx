import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    const renderMovieCards = movies.map((movie) => (<MovieCard
      key={ movie.title }
      movie={ movie }
    />));

    return (
      <div className="App">
        { renderMovieCards }
      </div>
    );
  }
}

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf,
};

export default MovieList;
