// implement MovieList component here
import PropTypes from 'prop-types';
import React from 'react';
import MovieCard from './MovieCard';
import '../App.css';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main>
        <section className="movie-list">
          {movies.map((mov) => <MovieCard movie={ mov } key={ mov.title } />)}
        </section>
      </main>);
  }
}
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ).isRequired,
};
export default MovieList;
