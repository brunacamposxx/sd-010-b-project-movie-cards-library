// implement MovieCard component here
import React from 'react';
import movies from '../data';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section>
        <img src={ movie.imagePath } alt="Movie poster" />
        <h4>
          { movie.title }
        </h4>
        <h5>
          { movie.subtitle }
        </h5>
        <p>
          { movie.storyline }
        </p>
      </section>
    );
  }
}

export default MovieCard;
