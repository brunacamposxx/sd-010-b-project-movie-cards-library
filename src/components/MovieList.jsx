import React from 'react';
import Proptypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie }/>
        ) }
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: Proptypes.arrayOf(
    Proptypes.shape({
      title: Proptypes.string,
      subtitle: Proptypes.string,
      storyline: Proptypes.string,
      imagePath: Proptypes.string,
      rating: Proptypes.number,
    }).isRequired,
  ),
};

export default MovieList;
