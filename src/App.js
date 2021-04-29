// Pra encaixar o CSS nesse projeto,eu tive que ir inserindo classes nos lugares certos. Só deu certo com a ajuda do colega Henrique Zózimo. Link do PR dele: https://github.com/tryber/sd-010-b-project-movie-cards-library/pull/59/commits/fe499df1773ebb1b75e28c8643c685f788cab685
import React from 'react';
import './App.css';
import Header from './components/Header';
import movies from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
