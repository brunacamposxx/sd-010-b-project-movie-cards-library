import React from 'react';
import React, { Component } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      Hora de codar! 🚀✍️👨‍💻👩‍💻💪
    </div>
  );
}
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

export default App;
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movies={ movies } />
      </div>
    );
  }
}
