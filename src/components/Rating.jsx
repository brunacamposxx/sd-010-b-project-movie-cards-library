import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const movieRate = this.props.rating;
    return (
      <div className='rating'>
        { movieRate }
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
}

export default Rating;
