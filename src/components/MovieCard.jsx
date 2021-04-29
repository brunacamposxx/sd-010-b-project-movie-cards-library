// implement MovieCard component here
import React from 'react';


class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath } } = this.props;

    return (
      <ul>filmes
        <li>{ title }</li>
        <li>{ subtitle }</li>
        <li>{ storyline }</li>
        <li>{ imagePath }</li>
      </ul>
    );
  }
}

export default MovieCard;
