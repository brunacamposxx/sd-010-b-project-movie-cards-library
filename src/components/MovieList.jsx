import React, { Component } from 'react';
import MovieCards from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <div className='Movielist'>
        {this.props.movies.map((movies, index) => <MovieCards movies={movies} index={index} />)}
      </div>
    );
  };
};

export default MovieList;
