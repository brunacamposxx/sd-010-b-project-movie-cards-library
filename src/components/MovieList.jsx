import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    const renderMovieCards = movies.map((movie) => (<MovieCard
      key={ movie.title }
      movie={ movie }
    />));

    return (
      <div className="movie-list">
        {renderMovieCards}
      </div>
    );
  }
}

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf({
    movie: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  }),
};

export default MovieList;
