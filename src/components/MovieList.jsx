import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <section className="movie-list">
        { movies.map((movie) => {
          const { title, storyline, imagePath } = movie;
          return (
            <MovieCard key={ title } storyline={ storyline } imagePath={ imagePath } />
          );
        })}
      </section>
    );
  }
}

export default MovieList;
