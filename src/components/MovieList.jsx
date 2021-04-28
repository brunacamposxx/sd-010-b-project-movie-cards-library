// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
    render() {
        const { movies } = this.props;
            return (movies.map(({ title }) => {
                return <MovieCard key={ title }/>
            }))
    }
}

export default MovieList;