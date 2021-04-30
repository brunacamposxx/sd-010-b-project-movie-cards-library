import React from 'react';
import '../App.css';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      movies.map((movie) => <MovieCard key={ movies.title } movieInfo={ movie }/>)
    );
  }
}

export default MovieList;
