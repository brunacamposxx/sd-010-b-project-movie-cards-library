import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  const movies = [
    {
      title: 'Steve Jobs',
      subtitle: ' Steve Jobs (2015)',
      storyline: 'Movie Storyline 1',
      rating: 4.5,
      imagePath: 'images/movie_1',
    },
    {
      title: 'Movie Title 2',
      subtitle: 'Movie Subtitle 2',
      storyline: 'Movie Storyline 2',
      rating: 4.5,
      imagePath: 'images/movie_2',
    },
    {
      title: 'Movie Title 3',
      subtitle: 'Movie Subtitle 3',
      storyline: 'Movie Storyline 3',
      rating: 3,
      imagePath: 'images/movie_3',
    },
  ];
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
