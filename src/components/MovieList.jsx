import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    console.log('MovieList');
    return (
      movies.map((item) => <MovieCard key={ item.title } movie={ item } />)
    );
  }
}
MovieList.propTypes = PropTypes.array.isRequired;
export default MovieList;
