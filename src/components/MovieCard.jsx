// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movieInfo: { imagePath, title, subtitle, storyline } } = this.props;
    return (
      <section>
        <img src={ imagePath } alt="Movie card" />
        <h4>
          { title }
        </h4>
        <h5>
          { subtitle }
        </h5>
        <p>
          { storyline }
        </p>
        {/* <Rating /> */}
      </section>
    );
  }
}

export default MovieCard;
