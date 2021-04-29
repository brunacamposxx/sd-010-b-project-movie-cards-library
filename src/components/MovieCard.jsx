import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;
    return (
      <div>
        <p>{ title }</p>
        <p>{ subtitle }</p>
        <p>{ storyline }</p>
        <p>{ rating }</p>
        <img src={imagePath} alt=""/>
      </div>
    );
  }
}

export default MovieCard;
