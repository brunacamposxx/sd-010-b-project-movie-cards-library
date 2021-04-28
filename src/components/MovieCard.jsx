import React from 'react';

class MovieCard extends React.Component {
  render () {
    const { title } = this.props.movie;
    return (
      <div className="movie-list">
        { title }
      </div>
    );
  }
}

export default MovieCard;
