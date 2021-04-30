import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath } } = this.props;
    return (
      <div className="movie-card">
        <h1 className="movie-card-title">{ title }</h1>
        <img className="movie-card-image" src={ imagePath }/>
      </div>
    );
  }
}

export default MovieCard;
