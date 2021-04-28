import React from 'react';
import MovieCard from './MovieCard'

export default class MovieList extends React.Component{
render() {
  const { movieList } = this.props;
  return(
    <section>
      { movieList.map ((movie)=>{
        return  <MovieCard key= { movie.title } movieCardInfo = { movie }/>
      })}
   
    </section>
    
  );
}

}
