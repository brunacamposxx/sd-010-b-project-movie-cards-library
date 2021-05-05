import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    // 1. fazendo o destruction obj do props que tem a chave movie, passado no MovieList
    const {
      movie: { title, subtitle, storyline, imagePath, rating },
    } = this.props;
    return (
      // 2. na section está renderizando os elementos title, subtitle etc
      // 3. renderização de Rating, foi enviado como chave rating que recebe rating
      <section>
        <div>
          <img src={ imagePath } alt="imagem" />
        </div>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </section>
    );
  }
}

// 4. tipagem do elemento recebido em MovieCard
MovieCard.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      imagePath: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
    }),
  ).isRequired,
};

export default MovieCard;
