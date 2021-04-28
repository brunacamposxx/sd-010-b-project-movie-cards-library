import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movieInfo } = this.props;
    return (
      <section>
        <p>
          {movieInfo.title}
        </p>
        <p>
          {movieInfo.subtitle}
        </p>
        <p>
          {movieInfo.storyline}
        </p>
        <img src={ movieInfo.imagePath } alt={ movieInfo.title } />
        <p>
          {movieInfo.rating}
        </p>
      </section>
    );
  }
}

export default MovieCard;
