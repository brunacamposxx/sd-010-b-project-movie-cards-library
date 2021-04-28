import React from 'react';
// import movies from '../data.js';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        <MovieCard />
        {/* <MovieCard
          title={ movies[0].title }
          subtitle={ ovies[0].subtitle }
          storyline={ movies[0].storyline }
          rating={ movies[0].rating }
          img={ movies[0].imagePath }
        /> */}
      </div>
    );
  }
}

export default MovieList;
