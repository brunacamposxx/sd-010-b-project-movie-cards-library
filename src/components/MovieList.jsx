import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const arrayMovie = this.props.array;
    { arrayMovie.map((unimovie) => {
      return (
      <MovieCard movie={unimovie} /> 
      )
      });
    }
    return (
      
    );
  }
}

export default MovieList;