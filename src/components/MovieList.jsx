import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render () {
    const { movies } = this.props;
    return (
      <div className='movie-list'>
        { movies.map((theMovie) => <MovieCard key={ theMovie.title } movie={ theMovie } />) }
      </div>
    );
  }
}

export default MovieList;
