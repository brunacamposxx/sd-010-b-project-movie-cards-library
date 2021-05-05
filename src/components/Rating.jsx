import React from 'react';
import PropTypes from 'prop-types';

/* const Rating = (props) => {
    const { rating } = this.props;
      return (<div className="movie-card-rating">
        <div className="rating">
          { rating }
        </div>
      </div>);
  } */

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <div className="rating">
          { rating }
        </div>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
