// alguns detalhes sobre essa parte de proptype eu consegui entender a resolução graças ao meu colega de turma Matheus Carreta. Link do PR dele: https://github.com/tryber/sd-010-b-project-movie-cards-library/pull/98/commits
import React from 'react';
import PropTypes from 'prop-types'; // tem que fazer isso também. 'prop-types' é a biblioteca.
import MovieCard from './MovieCard';// Como uso o MovieCard ali no map, tenho que importar aqui e exportar o MovieCard lá no próprio MovieCard.

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;// faço isso pq esse movies é a prop de MovieList lá no App.js. Essa prop recebe o array de objetos que tem lá no data.js
    return (
      movies.map((movie) => (<MovieCard key={ movie.title } />)) // A prop movies recebe o array de objetos que tá em data.js. Cada objeto do array em data.js será um "movie". Cada um desse movie vai ter um MovieCard com uma chave tendo o nome desse movie.
    );
  }
}
// o que é feito aqui abaixo de propTypes, tem que ser feito porque o Lint reclama se usar algum prop e não fizer esse esquema de proptypes.
MovieList.propTypes = { // aqui o p é minúsculo

  movies: PropTypes.arrayOf( // movies é um array
    PropTypes.shape({ // mas é um array de objetos
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storylane: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ).isRequired,
};
export default MovieList;
