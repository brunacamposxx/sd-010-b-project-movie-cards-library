import React from 'react';
import './App.css';
import data from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  const title = 'Movie Cards Library';
  return (
    <div className="App">
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      <Header title={ title } />
      <MovieList movies={ data } />
    </div>
  );
}

export default App;
