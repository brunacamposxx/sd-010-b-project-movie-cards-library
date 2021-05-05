import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Rating from './components/Rating';
import movies from './data';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movies={ movies } />
        <Rating />
      </div>
    );
  }
}
export default App;
