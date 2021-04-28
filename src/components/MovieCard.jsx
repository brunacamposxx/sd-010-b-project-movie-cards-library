// implement MovieCard component here
import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types'

class MovieCard extends React.Component {
  render() {
    return (
			<section className = 'movie-card'>
				<img src = { this.props.movie.imagePath } alt = { this.props.movie.title } className = 'movie-card-image'></img>
				<header>
				<h4 className = 'movie-card-title'>{ this.props.movie.title }</h4>
				<h5 className = 'movie-card-subtitle'>{ this.props.movie.subtitle }</h5>
				</header>
				<p className = 'movie-card-storyline'>{ this.props.movie.storyline }</p>
				<section className = 'movie-card-rating'>
				<Rating rating = { this.props.movie.rating }/>
				</section>
			</section> 
    )
    }
}

MovieCard.propTypes = {
	movie: PropTypes.shape({
			title: PropTypes.string.isRequired,
			subtitle: PropTypes.string.isRequired,
			storyline: PropTypes.string.isRequired,
			imagePath: PropTypes.string.isRequired,
	})
};

export default MovieCard;
