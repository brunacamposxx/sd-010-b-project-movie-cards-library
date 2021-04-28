import React from 'react';
import PropTypes from 'prop-types';
// import movies from '../data';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">
        <span className="movie-card-rating">{ rating }</span>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
