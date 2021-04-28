// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { MovieInfo: { title } } = this.props;
    return (
      <h1>{ title }</h1>
    );
  }
}
MovieCard.propTypes = {
  title: PropTypes.string.isRequired
};
  
export default MovieCard;
