import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <ol className='movie-list'>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </ol>
    );
  }
}

export default MovieList;
