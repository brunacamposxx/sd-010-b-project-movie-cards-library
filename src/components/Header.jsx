// Iniciando o projeto 🚀
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1> Movie Cards Library </h1>
      </header>
      // React.createElement('header', null, React.createElement('h1', null, 'Movie Cards Library'))
    );
  }
}

export default Header;
