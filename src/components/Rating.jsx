import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <p>{ rating }</p>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
