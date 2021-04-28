import React from 'react';
import './App.css';
import MovieList from './components/MovieList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MovieList />
      </div>
    );
  }
}

export default App;
