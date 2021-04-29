import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <ol>
          {movies.map((movie) => (
            <MovieCard key={ movie.title } movie={ movie } />))}
        </ol>
      </div>
    );
  }
}

export default MovieList;
