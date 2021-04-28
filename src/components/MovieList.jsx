import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render () {
    const allMovies = this.props.movies;
    return (
      <div className='movie-list'>
        {allMovies.map((theMovie) => <MovieCard key={theMovie.title} movie={theMovie}/>)}
      </div>
    );
  }
}

export default MovieList;