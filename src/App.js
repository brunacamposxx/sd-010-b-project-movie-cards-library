import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <MovieList />
        <MovieCard />
      </main>
    );
  }
}

export default App;
