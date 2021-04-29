import React from 'react';

import movies from '../data';

class Rating extends React.Component {
  render() {
      const { rating } = this.props;
      return (
      <p>{ rating }</p>
      )
    }
}

export default Rating;
