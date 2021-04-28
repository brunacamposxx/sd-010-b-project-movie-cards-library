// implement MovieList component here
import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  
	render() {
		const { movies } = this.props;
    return (
      <div>
        movies.map((movie) => (
          { < MovieCard /> }
        ));  
      </div>
    );
  }
 
}
export default MovieList;