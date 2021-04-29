import React from 'react';
// import PropTypes from 'prop-types';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section>
        { movies.map((filme) => <MovieCard key={ filme.title } movies={ filme } />)}
      </section>
    );
  }
}

// MovieList.propType = {

// }

export default MovieList;
