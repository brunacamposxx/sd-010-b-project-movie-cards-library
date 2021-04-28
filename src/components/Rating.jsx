import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    return (
      <div>
        { this.props.rating }

      </div>
    );
  }
}
Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
