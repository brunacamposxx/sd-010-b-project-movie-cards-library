import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';
import moviesD from './data';

class App extends React.Components {
  render() {
    return (
      <div className="App">
        <Header />
        <div id="body" className="movie-list">
          <MovieList movies={ moviesD } />
        </div>
      </div>
    );
  }
}

export default App;
