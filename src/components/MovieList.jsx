import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        <ol>
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </ol>
      </section>
    );
  };
}

export default MovieList;
