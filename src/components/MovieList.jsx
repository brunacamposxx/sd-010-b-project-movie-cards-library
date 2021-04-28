// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { MovieList } = this.props;
    return (
      <section>
        {MovieList.map((movie) => (
          <MovieCard key={ movie.id } MovieInfo= { movie } />))}
      </section>
    );
  }
}

export default MovieList;
