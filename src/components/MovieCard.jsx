// implement MovieCard component here
import React, { Component } from 'react';

const movies = [
  {
    id: 1,
    name: 'Interestelar',
    subtitle: 'Interstellar',
    description: `As reservas naturais da Terra estão chegando ao fim
    e um grupo de astronautas recebe a missão
    de verificar possíveis planetas pra receberem a população mundial.`,
    img: 'https://images-na.ssl-images-amazon.com/images/I/A1JVqNMI7UL._AC_SL1500_.jpg',
  },
  {
    id: 2,
    name: 'Viva a vida é uma festa',
    subtitle: 'Coco',
    description: `Miguel sonha em se tornar um músico como seu ídolo Ernesto de la Cruz,
    Miguel se encontra na deslumbrante e colorida Terra dos Mortos.
    embarca em uma jornada extraordinária para desvendar
    a verdadeira história por trás da história de sua família.`,
    img: 'https://storage.googleapis.com/adm-portal.appspot.com/noticias/_imgHighlight/832973/artigo_109249.jpg?mtime=20181125185128&focal=none',
  },
];

class MovieCard extends Component {
  render() {
    return (movies.map((movie) => {
      return (
        <div className="movie-card">
          <img src="" alt="" />
          <h4>{ movie.name }</h4>
          <h5>{ movie.subtitle }</h5>
          <p>{ movie.description }</p>
        </div>);
    })
    );
  }
}

export default MovieCard;
