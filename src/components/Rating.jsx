import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;

    return (
      <section className="rating">
        { rating }
      </section>
    );
  }
}

// PropTypes: tipagem das props do componente
Rating.propTypes = {
  rating: PropTypes.shape({
    rating: PropTypes.string,
  }).isRequired,
};

export default Rating;
