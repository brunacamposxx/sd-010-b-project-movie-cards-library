import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

const moviesArray = [{
  title: '007',
  subtitle: 'Sem Tempo Para Morrer',
  storyline: 'James Bond deixou o serviço ativo. '
    + 'Mas a paz do agente britânico dura pouco quando Felix Leiter (Jeffrey Wright), '
    + 'um velho amigo da CIA, aparece pedindo ajuda.',
  imagePath: 'https://img.olhardigital.com.br/wp-content/uploads/2021/04/Project-007-sera-um-novo-jogo-que-ira-construi-um-universo-para-James-Bond-dentro-dos-games.jpg',
  rating: 4.5,
}, {
  title: '007',
  subtitle: 'Sem Tempo Para Morrer',
  storyline: 'James Bond deixou o serviço ativo. '
    + 'Mas a paz do agente britânico dura pouco quando Felix Leiter (Jeffrey Wright), '
    + 'um velho amigo da CIA, aparece pedindo ajuda.',
  imagePath: 'https://img.olhardigital.com.br/wp-content/uploads/2021/04/Project-007-sera-um-novo-jogo-que-ira-construi-um-universo-para-James-Bond-dentro-dos-games.jpg',
  rating: 4.5,
}];

function App() {
  return (
    <main>
      <Header />
      <MovieList movies={ moviesArray } />
      <div className="App">
        {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
        Hora de codar! 🚀✍️👨‍💻👩‍💻💪
      </div>
    </main>
  );
}

export default App;
