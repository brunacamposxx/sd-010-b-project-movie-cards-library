import React from 'react';
import MovieCard from './MovieCard';
import Proptypes from 'proptypes';

export default class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        { movies.map((movie) => 
          <MovieCard key={ movie.title } movie={ movie }/>
        )}
      </section>
    );
  }
}

// MovieList.protoTypes = {
//   movies: Proptypes.arrayOf(
//     propTypes.shape({
//       title: Proptypes.string,
//       subtitle: Proptypes.string,
//       storyline: Proptypes.string,
//       imagePath: Proptypes.string,
//       rating: Proptypes.number
//      }).isRequired,
//   )
// }
