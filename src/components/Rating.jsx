import React from 'react';
import Movies from '../data';
// import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    return (
      <div>
        <h4>Rating</h4>
        <span>{ console.log(Movies.map((movie) => movie.rating)) }</span>
      </div>
    );
  }
}

// Rating.propTypes = {
//   rating: PropTypes.number.isRequired,
// };

export default Rating;
