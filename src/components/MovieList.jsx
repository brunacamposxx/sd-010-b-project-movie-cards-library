import React from 'react';

import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        { movies.map((cont) => (
          <MovieCard key={ cont.title } MovieInfo={ cont } />))}
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.string,
      imagePath: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieList;
