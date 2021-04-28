// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { itemList } = this.props;
    return (
      <section className="movie-list">
        {itemList.map((movie) => (
          <MovieCard key={ movie.title } item={ movie } />))}
      </section>
    );
  }
}

MovieList.propTypes = {
  itemList: PropTypes.arrayOf.isRequired,
};

export default MovieList;
