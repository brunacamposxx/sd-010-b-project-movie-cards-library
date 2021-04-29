import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">
        { rating }
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      imagePath: PropTypes.string,
      storyline: PropTypes.string,
      subtitle: PropTypes.string,
      rating: PropTypes.number,
    }),
  ).isRequired,
};
export default Rating;
