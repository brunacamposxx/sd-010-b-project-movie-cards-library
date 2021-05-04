// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  // constructor(props) { // recebe props como parâmetro
  //   super(props); // repassa para o construtor do React
  // }

  render() {
    const { movies } = this.props;
    return (
      <main>
        {
          movies.map(
            (movie) => <div key={ movie.title }>{movie.title}</div>,
          )
        }
      </main>
    );
  }
}

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
