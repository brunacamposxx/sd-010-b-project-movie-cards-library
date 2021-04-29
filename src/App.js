import React from 'react';
import './App.css';
import Header from './components/Header';
import data from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      {/* Hora de codar! 🚀✍️👨‍💻👩‍💻💪 */}
      <Header />
      <MovieList movies={ data } />
    </div>
  );
}

export default App;
