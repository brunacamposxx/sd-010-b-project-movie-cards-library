import React, { Component } from 'react';
import '../App.css';

class Rating extends Component {
  render() {
    const { rating, className } = this.props;
    return (
      <span className="rating">{ rating }</span>
    );
  }
}

export default Rating;
