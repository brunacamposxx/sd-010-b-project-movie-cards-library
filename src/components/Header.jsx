import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <h1 className="page-title">Movie Cards Library</h1>
      </header>
    );
  }
}
export default Header; // eu exporto esse Header aqui e vou importar ele lá no App.js porque lá eu irei usar o Header
