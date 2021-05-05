import React, { Component } from 'react';
// Instalando proptypes com : npm i --save prop-type
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import '../App.css';

class MovieList extends Component {
  render() {
    // 1.recebendo o array movies de data, passado em App
    const { movies } = this.props;

    // 2. fazendo o map para capturar cada elemento de movies
    // 3. passando para MovieCard element.title como key e element(que seria cada filme) como movie
    return (
      <div className="movie-list">
        {movies.map((element) => (
          <MovieCard key={ element.title } movie={ element } />
        ))}
      </div>
    );
  }
}
// PropType forma 1
// MovieList.propTypes = PropTypes.array.isRequired;

// PropTypes forma 2
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ).isRequired,
};
export default MovieList;
