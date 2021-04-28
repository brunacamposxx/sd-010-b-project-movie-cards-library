import React from 'react';

class MovieCard extends React.Component {
  render() {
    const title = this.props.title;
    return (
      <div>
        <p>{ title }</p>
      </div>
    );
  }
}

export default MovieCard;
