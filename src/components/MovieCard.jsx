import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, rating, storyline, imagePath } = movie;
    return (
      <section>
        <div>
          <img src={imagePath} alt= {title}/>
          <p>{title}</p>
          <p>{subtitle}</p>
          <p>{storyline}</p>
        </div>
        <div>
          {/* <Rating rating = { rating } /> */}
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape(),
};

MovieCard.defaultProps = {
  movie: {},
};

export default MovieCard;