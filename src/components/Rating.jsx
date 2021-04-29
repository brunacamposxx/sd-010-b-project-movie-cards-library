// implement Rating component here
import React from 'react';
import ProtoTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">
        <h1 className="movie-card-rating">{rating}</h1>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: ProtoTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};

export default Rating;
