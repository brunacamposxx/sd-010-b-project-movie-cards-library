import React from 'react';

class Header extends React.Component {
  render() {
    return (
      React.createElement('header', {
        className: 'movie-card-header',
      },
      React.createElement('h1', {
        className: 'page-title',
      }, 'Movie Cards Library'))
    );
  }
}
export default Header;
