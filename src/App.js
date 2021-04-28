import React from 'react';
import Header from './components/Header';
import './App.css';
import Cardlist from './components/cardlist';

function App() {
  return (
    <div className="App">
      <Header />
      <Cardlist />
    </div>
  );
}

export default App;
