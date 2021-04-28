import React, { Component } from 'react';
// import "./style.css";
// import "./function.js";

const movieList = ({ titulo, subTitulo }) => (
  <section className="nome-da-classe">
    <h1>{titulo}</h1>
    <p>{subTitulo}</p>
  </section>
);

class MovieList extends Component {
  render() {
    return (
      movieList({ titulo: 'Título', subTitulo: 'Sub-Titulo' })
    );
  }
}

export default MovieList;
