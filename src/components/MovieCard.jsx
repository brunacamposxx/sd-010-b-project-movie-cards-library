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
        rating,
      } = this.props;
    return (
      <section>
        <img src={ imagePath } alt={ title }/>
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <span>{ storyLine }</span>
        <span>{ rating }</span>
      </section>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyLine: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;
