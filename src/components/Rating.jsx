import React from 'react';
import PropTypes from 'prop-types';

clas Rating extends React.Component {
  render() {
    const { rating } = this.prop;
    return (
      <div className="movie-card-rating" data-testid="rating">
        <span className="rating">{rating}</span>
      </div>
    );
  }
}

Rating.PropTypes = { rating: PropTypes.number };

Rating.defaultProps = {
  rating: 'undefined',
};

export default Rating;