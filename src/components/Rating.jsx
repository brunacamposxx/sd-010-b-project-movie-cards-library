import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component { // REQUISITO 12 - Prop e Elemento <p> REQUIS 14
  render() {
    const { rating } = this.props;
    return (
      <section>
        <p className="rating">{ rating }</p>
      </section>
    );
  }
}

Rating.propTypes = { // REQUISITO 17
  rating: PropTypes.number.isRequired,
};

export default Rating;
