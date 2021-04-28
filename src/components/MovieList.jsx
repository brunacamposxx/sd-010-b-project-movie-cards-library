import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <main>
        <ul>
          {movies.map((movie) => (
            <li key={ movie.title }>
              <MovieCard key={ movie.title } movie={ movie } />
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default MovieList;
