import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props;
    return (
      <section className="movie-card">
        <img src={ imagePath } alt="movie poster" />
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <p>{storyline}</p>
        <p>{rating}</p>
      </section>
    );
  }
}

export default MovieCard;
