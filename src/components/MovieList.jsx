import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    <MovieCard />
    const { movies } = this.props;
    console.log(movies);
    return (
      <section>
        <p>aaaa</p>
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
