import React from 'react';

class MovieCard extends React.Component {
  render() {
    const [title, subtitle, storyline, rating, img] = this.props;
    return (
      <div>
        <p>{ title }</p>
        <p>{ subtitle }</p>
        <p>{ storyline }</p>
        <p>{ rating }</p>
        <img src={ img } alt="imagem do jogo que esta sendo mostraro" />
      </div>
    );
  }
}

export default MovieCard;
