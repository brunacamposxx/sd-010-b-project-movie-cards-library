// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

class MovieList extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <div className="movie-card movie-card-body">
        <img className="movie-card-image" src={ imagePath } alt="title" />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

export default MovieList;
