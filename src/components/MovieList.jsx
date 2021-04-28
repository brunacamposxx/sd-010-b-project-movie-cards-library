import React from 'react';
import movies from '../data.js';
import MovieCard from './MovieCard.jsx'
class MovieList extends React.Component {
    render() {
    return (
        <div>
            <MovieCard />
            {/* <MovieCard 
            title={movies[0].title} 
            subtitle={movies[0].subtitle}
            storyline={movies[0].storyline}
            rating={movies[0].rating}
            img={movies[0].imagePath}
            />
            <MovieCard 
            title={movies[1].title} 
            subtitle={movies[1].subtitle}
            storyline={movies[1].storyline}
            rating={movies[1].rating}
            img={movies[1].imagePath}
            />
            <MovieCard 
            title={movies[2].title} 
            subtitle={movies[2].subtitle}
            storyline={movies[2].storyline}
            rating={movies[2].rating}
            img={movies[2].imagePath}
            />
            <MovieCard 
            title={movies[3].title} 
            subtitle={movies[3].subtitle}
            storyline={movies[3].storyline}
            rating={movies[3].rating}
            img={movies[3].imagePath}
            />
            <MovieCard 
            title={movies[4].title} 
            subtitle={movies[4].subtitle}
            storyline={movies[4].storyline}
            rating={movies[4].rating}
            img={movies[4].imagePath}
            /> */}
        </div>
        );
    }
    
}

export default MovieList;
