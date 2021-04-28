import React from 'react';
import './App.css';
import Header from './Header';
import MovieList from './MovieList'
import movies from 'data.js';

function App() {
  return (
    <div className="App">
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      {/* Hora de codar! 🚀✍️👨‍💻👩‍💻💪 */}
      < Header />
      < MovieList movies={ movies }/>
    </div>
  );
}

export default App;
