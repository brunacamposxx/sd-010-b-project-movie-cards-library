import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="header">
      <Header />
      <MovieList />
    </div>
  );
}

export default App;
