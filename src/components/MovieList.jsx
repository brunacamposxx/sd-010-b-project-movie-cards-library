import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movie } = this.props;

    return (
      <div>
        {movie.map((item) => <MovieCard key={ item.title } movie={ item } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      imagePath: PropTypes.string,
      rating: PropTypes.number,
    }),
  ).isRequired,
};

export default MovieList;
