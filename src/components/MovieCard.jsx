// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
    render() {
        const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
            return (
                <div className="movie-card">
                    <img className="movie-card-image" src={ imagePath }></img>
                    <h4 className="movie-card-title">{ title }</h4>
                    <h5 className="movie-card-subtitle">{ subtitle }</h5>
                    <p className="movie-card-storyline">{ storyline }</p>
                    <Rating className="movie-card-rating" rating={ rating }/>
                </div>
            )
    }
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
}

export default MovieCard;