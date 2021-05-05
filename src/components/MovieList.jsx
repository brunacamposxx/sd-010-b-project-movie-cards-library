// implement MovieList component here
import React from 'react'
import MovieCard from './MovieCard'
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const listaCard = movies.map((card) => <MovieCard movie={ card } key={card.title}/>)
    return (
        <section>
          {listaCard}
        </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
}

export default MovieList