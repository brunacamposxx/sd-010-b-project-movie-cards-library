// implement Header component here
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header" id="top">
        <h1 className="page-title">Movie Cards Library</h1>
        <h2 className="nav-link">
          <a href="#body"> + </a>
        </h2>
      </header>
    );
  }
}

export default Header;
