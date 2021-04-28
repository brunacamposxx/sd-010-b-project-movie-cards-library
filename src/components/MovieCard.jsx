import React from 'react';

class MovieCard extends React.Component {
  render () {    
    return (
      <div className='movie-card'>
        {this.props.movie.title}
      </div>
    );
  }
}

export default MovieCard;