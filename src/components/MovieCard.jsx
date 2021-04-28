import React from 'react';

class MovieCard extends React.Component {
  render() {
    return (
      <div>
        <p>{ this.props.title </p>
        <p>{ this.props.subtitle }</p>
        <p>{ this.props.storyline }</p>
        <p>{ this.props.rating }</p>
        <img src={ this.props.img }/>
       </div>
    );
  }
}

export default MovieCard;
