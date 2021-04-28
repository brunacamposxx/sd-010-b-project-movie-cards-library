import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;

    return (<spam className="rating">{ rating }</spam>);
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
