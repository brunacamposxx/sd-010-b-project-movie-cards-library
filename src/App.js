import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
import Rating from './components/Rating';

function App() {
  return (
    <div className="App">
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      Hora de codar, D.S! 🚀✍️👨‍💻👩‍💻💪
      <Header />
      <MovieCard />
      <MovieList />
      <Rating />
    </div>
  );
}

export default App;
