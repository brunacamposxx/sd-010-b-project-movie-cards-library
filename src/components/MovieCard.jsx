import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import movies from '../../../../exercicios-fixacao/Projeto-React/projeto-react/src/data';

class MovieCards extends Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props.movies;

    return (
      <div className="moviecard">
        <div>
          <img src = { imagePath } alt = {` ${title} `} />
          <h4>{ title }</h4>
          <h5>{ subtitle }</h5>
          <p>{ storyline }</p>
          <h5>{ Rating }</h5>
        </div>
      </div>
    );
  }
}

movies.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCards;
