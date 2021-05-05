import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const rating = this.props;
    return (
      <div>
        <p>
          Rating:
          { rating }
        </p>
      </div>
    );
  }
}

Rating.propTypes = PropTypes.number.isRequired;

export default Rating;
