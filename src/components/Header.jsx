// implement Header component here
// #vqv

import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <img className="img-logo" src="images/computador-portatil.png" alt="controle" />
        <h1 className="page-title">
          Games
          <span className="logo-title">Center</span>
        </h1>
        <ul className="navBar">
          <li className="navBarItems">$Plano</li>
        </ul>
      </header>
    );
  }
}

export default Header;
