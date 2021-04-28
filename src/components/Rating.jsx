// implement Rating component here
import React from 'react';

const ratings = ['4.8', '5', '4.5', '2', '1.3', '4'];

class Rating extends React.Component {
  render() {
    return (ratings.map((rating) => (
      <div className="" key={ rating.index }>
        { rating }
      </div>))
    );
  }
}

export default Rating;
