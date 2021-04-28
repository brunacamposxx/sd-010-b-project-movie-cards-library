// implement MovieCard component here
import React, { Component } from 'react';
import Rating from './Rating';

const movies = [
  {
    id: 1,
    name: 'Interestelar',
    subtitle: 'Interstellar',
    description: `As reservas naturais da Terra estão chegando ao fim
    e um grupo de astronautas recebe a missão
    de verificar possíveis planetas pra receberem a população mundial.`,
    img: 'https://wallup.net/wp-content/uploads/2019/09/367002-interstellar-adventure-mystery-sci-fi-futuristic-film-spaceship-poster-planet.jpg',
  },
  {
    id: 2,
    name: 'Viva a vida é uma festa',
    subtitle: 'Coco',
    description: `Miguel sonha em se tornar um músico como seu ídolo Ernesto de la Cruz,
    embarca em uma jornada extraordinária para desvendar
    a verdadeira história por trás da história de sua família.`,
    img: 'https://storage.googleapis.com/adm-portal.appspot.com/noticias/_imgHighlight/832973/artigo_109249.jpg?mtime=20181125185128&focal=none',
  },
  {
    id: 3,
    name: 'Fragmentado',
    subtitle: 'Split',
    description: `Kevin possui 23 personalidades distintas 
    Um dia, ele sequestra três adolescentes,
    em cativeiro, elas passam a conhecer as diferentes facetas de Kevin.`,
    img: 'https://www.ezimonteiro.com.br/wp-content/uploads/2017/04/split.jpg',
  },
  {
    id: 4,
    name: 'Estou Pensando em Acabar com Tudo',
    subtitle: 'I\'m Thinking of Ending Things',
    description: `Lucy embarca numa viagem para conhecer os pais do seu namorado Jake.
    Chegando no local, ela começa a notar comportamentos estranhos
    e muita coisa non-sense acontece`,
    img: 'https://www.planocritico.com/wp-content/uploads/2020/09/estou-pensando-em-acabar-com-tudo-plano-critico.jpg',
  },
  {
    id: 5,
    name: 'Dragon ball Evolution',
    subtitle: 'Dragonball Evolution',
    description: `Em seu aniversário de 18 anos, Goku ganha uma esfera do dragão
     mística de presente de seu avô. Existem apenas seis outras no mundo todo,
     e reza a lenda que será concedido um desejo a quem possuir todas as sete.
     Quando uma força obscura provoca uma tragédia.`,
    img: 'https://aguycalledpeg.files.wordpress.com/2018/09/poster-e1537956413457.jpg?w=1000&h=582&crop=1',
  },
  {
    id: 6,
    name: 'O Poderoso Chefão',
    subtitle: 'The Godfather',
    description: `Tem tiro, máfia e chefão.
    Nunca vi, minha mãe quem falou`,
    img: 'https://www.metalpiracicaba.com.br/wp-content/uploads/2018/04/marlon-1-696x407.jpg',
  },
];

class MovieCard extends Component {
  render() {
    return (movies.map((movie) => (
      <div className="movie-card">
        <img className="movie-card-image" src={ movie.img } alt={ movie.name } />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ movie.name }</h4>
          <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
          <p className="movie-card-storyline">{ movie.description }</p>
        </div>
        <Rating className ="movie-card-rating" />
      </div>))
    );
  }
}

export default MovieCard;
