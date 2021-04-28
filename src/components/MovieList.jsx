import React from 'react';
import MovieCard from './MovieCard';

import MoviesInfos from '../data';

class MovieList extends React.Component {
  render() {
    return (
      MoviesInfos.map((movie) => <MovieCard key={ movie.title } movies={ movie } />)
    );
  }
}

export default MovieList;
