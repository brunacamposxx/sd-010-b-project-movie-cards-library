import React, { Component } from 'react';// implement MovieCard component here

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">{rating}
      </div>
    );
  }
}

export default Rating;
