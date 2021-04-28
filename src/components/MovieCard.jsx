// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const {
      movie: {
        title,
        subtitle,
        storyline,
        imagePath,
        rating,
      },
    } = this.props;
    return (
      <section>
        <header>
          <img style={ { width: '90px' } } src={ imagePath } alt="Movie" />
        </header>
        <main>
          <h1>{ title }</h1>
          <h5>{ subtitle }</h5>
          <p>{ storyline }</p>
        </main>
        <footer>
          <h2>{ rating }</h2>
        </footer>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
