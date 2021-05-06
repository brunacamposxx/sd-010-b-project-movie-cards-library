// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';
import AvaliacaoEstrela from './AvaliacaoEstrela';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <AvaliacaoEstrela qtd={ rating } />
        <span className="rating">{rating}</span>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
