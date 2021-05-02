import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        Rating:
        <strong className="rating">{rating}</strong>
      </div>
    );
  }
}

Rating.propTypes = PropTypes.number.isRequired;
