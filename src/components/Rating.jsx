import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <span className="rating">{rating}</span>
      </div>
    );
  }
}

Rating.propsTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
