import React from 'react';
import data from '../data.js';
import MovieList from './MovieList.jsx'
class MovieCard extends React.Component {
    render() {
      return (
          <div>
              <p>{this.props.title}</p>
              <p>{this.props.subtitle}</p>
              <p>{this.props.storyline}</p>
              <p>{this.props.rating}</p>
              <img src={this.props.img}/>
          </div>
          );
      }
}

export default MovieCard;
