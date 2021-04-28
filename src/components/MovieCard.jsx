import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-list">
        { movie.title }
      </div>
    );
  }
}

export default MovieCard;
