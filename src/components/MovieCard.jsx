import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { item: { title , subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <img src={ imagePath } alt={ title } />
        <p>{ storyline }</p>
      </div>
    );
  }
}

export default MovieCard;
