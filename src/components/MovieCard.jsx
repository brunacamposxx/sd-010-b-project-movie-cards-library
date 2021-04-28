import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const
      {
        title,
        subtitle,
        imagePath,
        storyLine,
      } = this.props.movie;
    return (
      <section>
        <img src={ imagePath } alt={ title }/>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <span>{ storyLine }</span>
      </section>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyLine: PropTypes.string.isRequired,
};

export default MovieCard;
