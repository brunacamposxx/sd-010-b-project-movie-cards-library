import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const arrayMovies = this.props.movies;
    return (
      <h1>TESTE!</h1>
    )
  }
}

MovieList.propTypes = {
  arrayMovies: PropTypes.array.isRequired,
}

export default MovieList;