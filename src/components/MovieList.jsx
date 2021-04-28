import React from 'react'
import MovieCard from '../components/MovieCard'
import PropTypes from 'prop-types'

class MovieList extends React.Component {
  render() {
    return (
      <div>
        { this.props.movies.map(movie => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    )
  }
};

MovieList.propTypes = {
  title: PropTypes.string,
};

export default MovieList;