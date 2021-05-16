import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';

class App extends React.Components {
  render() {
    return (
      <div className="App">
        <Header />
        <div id="body" className="movie-list">
          <MovieList movies={ movies } />
        </div>
      </div>
    );
  }
}

export default App;
