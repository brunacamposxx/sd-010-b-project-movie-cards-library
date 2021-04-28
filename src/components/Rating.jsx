import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return <p>{ rating }</p>;
  }
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;

// Source: https://www.w3schools.com/react/react_components.asp#:~:text=Components%20are%20independent%20and%20reusable,will%20concentrate%20on%20Class%20components.
// Ajuda na resolução por meio do Discord.
// https://www.youtube.com/watch?v=ycrhfkZUKT0
