import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movieList = this.props.movies;
    return (
      <div>
        { movieList.map((movieInfo) => {
          return <MovieCard key={ movieInfo.title } movie={ movieInfo } />
        })}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
