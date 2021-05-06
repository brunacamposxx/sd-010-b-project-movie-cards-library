import React from 'react';
import data from './data';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import Plano from './components/Plano';

function App() {
  return (
    <div className="App">
      <Plano />
      <Header />
      <MovieList movies={ data } />
      <Footer />
    </div>
  );
}

export default App;
