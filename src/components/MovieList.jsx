// implement MovieList component here
import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <p>{movies}</p>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.string.isRequired,
};

export default MovieList;
