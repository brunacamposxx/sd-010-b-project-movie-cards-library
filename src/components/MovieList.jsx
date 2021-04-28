// implement MovieList component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    console.log(movies);
    return (
      <section>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
