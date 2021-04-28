import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <p className="rating">{rating}</p>
    );
  }
}

// Documentation on Github to end the false undefined warning
Rating.defaultProps = {
  rating: 2,
};

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
