import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Rating extends Component {
  render() {
    // 1. recebe objeto como props com a chave rating, e faz a destructing obj desse objeto
    const { rating } = this.props;

    // 2. renderizando ratind no span
    return (
      <div className="movie-card-rating">
        Rating :
        <div className="rating">{rating}</div>
      </div>
    );
  }
}

// 3. tipando o dado recebido em Rating como numero
Rating.propTypes = PropTypes.number.isRequired;

export default Rating;
