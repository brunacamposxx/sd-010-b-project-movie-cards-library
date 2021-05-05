import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    // 1.renderizando Header e MovieList, passando data como movies
    <div className="App">
      <Header />
      <MovieList movies={ data } />
    </div>
  );
}

export default App;
