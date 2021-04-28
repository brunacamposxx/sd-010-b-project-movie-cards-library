// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { MovieList } = this.props;
    return (
      <section>
        {MovieList.map((MovieCard) => (
          <MovieCard key={ MovieCard.id} MovieInfo= {MovieCard} />))}  
      </section>
    );
  }
}

export default MovieList;
