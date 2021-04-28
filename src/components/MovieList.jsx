import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movieList } = this.props.movies;
    return (
      <div>
        { movieList.map((movieInfo) => {
          return (
            <MovieCard key={ movieInfo.title } movie={ movieInfo } />
          );
        })}
      </div>
    );
  }
}

// MovieList.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.object),
// }

export default MovieList;