import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    const movies = this.props;
    return <p>{movies[0]}</p>;
  }
}

export default MovieList;
