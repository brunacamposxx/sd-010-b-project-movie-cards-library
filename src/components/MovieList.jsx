// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

// import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { MovieList } = this.props;
    return (
      MovieList.map((movie) => (
        <MovieCard key={ movie.title } movieInfo={ movie } />))
    );
  }
}

export default MovieList;
