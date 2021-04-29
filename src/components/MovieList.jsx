// implement MovieList component here
import PropTypes from 'prop-types';
import React from 'react';
import MovieCard from './MovieCard';
import '../App.css';

class MovieList extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <main>
        <section className="movie-list">
          {movie.map((mov) => <MovieCard movie={ mov } key={ mov.title } />)}
        </section>
      </main>);
  }
}
MovieList.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
export default MovieList;
