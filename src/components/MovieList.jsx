// implement MovieList component here
import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <div>
        {this.pros.movies.map((movieObject) => (
          <MovieCard key={ movieObject.key } movie={ movieObject } />
        ))}
      </div>
    );
  }
}

export default MovieList;
