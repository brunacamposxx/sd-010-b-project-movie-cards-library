import React from 'react';
import movies from '../data';
// import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <main className="movie-list">
        { movies.props }
      </main>
    );
  }
}

export default MovieList;
