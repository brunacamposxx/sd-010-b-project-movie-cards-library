// implement MovieList component here
import React from 'react';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props
    return (
      <div>       
        <MovieList />
      </div>
    );
  }
}

export default MovieList;
