import React from 'react';
import MovieCard from './MovieCard';
import Movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <div className="App">
        {Movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
