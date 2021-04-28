import React from 'react';

export default class Rating extends React.Component {
  render() {
    const { movie: { rating } } = this.props;
    return (
      <p>
        Rating { rating }
      </p>
    );
  }
}

// Rating.propTypes = {
//   movie: Proptypes.shape({
//     rating: Proptypes.number,
//   }).isRequired,
// };
