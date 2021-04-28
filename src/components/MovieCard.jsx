import React from 'react';

class MovieCard extends React.Component {
  render() {
    const {title, subtitle, storyline, rating, imagePath} = this.props.movie;
    return (
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{storyline}</p>
        <p>{rating}</p>
        <img src={imagePath} alt={title}></img>
      </div>
    )
  }
}

export default MovieCard;