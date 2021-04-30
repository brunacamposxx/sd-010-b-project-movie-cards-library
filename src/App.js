import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';
// nao entendo o proto está bugando
function App() {
  return (
    <body>
      <main className="App">
        <Header />
        <MovieList movies={ movies } />
      </main>
    </body>
  );
}

export default App;
