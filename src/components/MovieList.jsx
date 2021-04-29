// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    // movie vem de map, logo vou renderizado por aqui
    const { movies } = this.props;
    return (
      <>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </>
    );
  }
}
export default MovieList;
