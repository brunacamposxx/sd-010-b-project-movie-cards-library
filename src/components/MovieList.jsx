// implement MovieList component here
import React from 'react';
import ProtoTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: ProtoTypes.arrayOf(
    ProtoTypes.shape({
      title: ProtoTypes.string,
      subtitle: ProtoTypes.string,
      storyline: ProtoTypes.string,
      rating: ProtoTypes.number,
      imagePath: ProtoTypes.string,
    }),
  ).isRequired,
};

export default MovieList;
