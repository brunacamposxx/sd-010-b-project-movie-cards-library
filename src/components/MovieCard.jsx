// implement MovieCard component here
import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    return (
      <section>
        <header>
          <img style={{ width: '90px' }} src={ this.props.movie.imagePath } alt="Movie" />
        </header>
        <main>
          <h1>{ this.props.movie.title }</h1>
          <h5>{ this.props.movie.subtitle }</h5>
          <p>{ this.props.movie.storyline }</p>
        </main>
        <footer>
          <h2>Rating</h2>
        </footer>
      </section>
    );
  }
}

export default MovieCard;
