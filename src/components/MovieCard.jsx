import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import '../App.css';

class MovieCard extends Component {
  render() {
    // 1. fazendo o destruction obj do props que tem a chave movie, passado no MovieList
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      // 2. na section está renderizando os elementos title, subtitle etc
      // 3. renderização de Rating, foi enviado como chave rating que recebe rating
      <section className="movie-card ">
        <div>
          <img src={ imagePath } alt="imagem" className="movie-card-image" />
        </div>
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <div>
          <Rating rating={ rating } />
        </div>
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
