import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;

    return (
      <section className="rating">
        <FontAwesomeIcon icon={ faStar } />
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
