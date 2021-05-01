// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
        const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
        <div>
            <img src={ imagePath } alt={ title }/>
        </div>
    }
}

export default MovieCard;
