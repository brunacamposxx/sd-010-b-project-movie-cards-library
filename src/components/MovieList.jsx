import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((movie, index) => <MovieCard key={ index } movie={ movie } />)
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })).isRequired,
};

// title: PropTypes.string,
// subtitle: PropTypes.string,
// storyline: PropTypes.string,
// rating: PropTypes.number,
// imagePath: PropTypes.string,
export default MovieList;
