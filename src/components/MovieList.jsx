import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <section className="movie-list">
        { movies.map((movie) => {
          const { title, subtitle, storyline, imagePath, rating } = movie;
          return <MovieCard key="id" title={ title } subtitle={ subtitle } storyline={ storyline } imagePath={ imagePath } rating={ rating } />;
        })}
      </section>
    );
  }
}

export default MovieList;

// (
//   <section className="movie-list">
//     { movies.map((movie) => {
//       const { title, subtitle, storyline, imagePath, rating } = movie;
//       return <MovieCard key="id" title={ title } subtitle={ subtitle } storyline={ storyline } imagePath={ imagePath } rating={ rating } />;
//     })}

//   </section>);
