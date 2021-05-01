import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <section>
      <div className="App" />
      <Header />
      <main>
        <MovieList movies={ movies } />
      </main>
    </section>
  );
}

export default App;
