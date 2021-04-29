import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie: {
      title,
      subtitle,
      storyline,
      imagePath } } = this.props;
    return (
      <li>
        <img src={ imagePath } alt={ title } />
        <h4>
          {title}
        </h4>
        <h4>
          {subtitle}
        </h4>
        <p>
          {storyline}
        </p>
      </li>
    );
  }
}
export default MovieCard;
