// implement Header component here
import React, { Component } from 'react';
import PropType from 'prop-types';

class Header extends Component {
  render() {
    const { texto } = this.props;
    return (
      <div>
        <header>
          <h1>
            {texto}
          </h1>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  texto: PropType.string.isRequired,
};

export default Header;
