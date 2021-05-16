import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieList from '.components/Header';
import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList data={ data } />
    </div>
  );
}

export default App;
