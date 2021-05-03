import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Top from './components/BackTop';
import Footer from './components/Footer';
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
