import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

import '../App.css';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props
    return (
      <main>
        <div className="movie-list">
          {movies.map((movie, index) => (
            <MovieCard key={ `Movie Title ${index + 1}` } movie={ movie } />
          ))}
        </div>
      </main>
    );
  }
}

export default MovieList;
