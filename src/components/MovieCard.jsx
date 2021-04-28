import React from 'react';
// import Rating from './Rating'

class MovieCard extends React.Component {
  render() {
    // const { movies: { title, subtitle, storyline, rating, imagePath }, } = this.props;
    const { movie } = this.props;
    // const { title, subtitle, storyline, rating, imagePath } = movies;
    return (
      <li>
        <img src={ movie.imagePath } alt={ movie.title } />
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyline }</p>
        {/* <Rating movie={ movie }/> */}
      </li>
    );
  }
}

export default MovieCard;
