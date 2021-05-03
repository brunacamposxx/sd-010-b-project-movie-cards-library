import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Top from './BackTop';
import Footer from './Footer';
import movies from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <div id="body" className="movie-list">
        <MovieList movies={ movies } />
      </div>
      <Top />
      <Footer />
    </div>
  );
}

export default App;
