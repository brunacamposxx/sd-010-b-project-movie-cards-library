import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList />
        <MovieCard />
      </div>
    );
  }
}
export default App;
