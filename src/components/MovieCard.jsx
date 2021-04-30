import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movieInfo: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div>
        <section>
          <img src={ imagePath } alt={ title }/>
          <h2>{ title }</h2>
          <h3>{ subtitle }</h3>
          <p>{ storyline }</p>
        </section>
        <section>
          { rating }
        </section>
      </div>
    );
  }
}

export default MovieCard;
