import React from 'react';
import PropTypes from 'prop-types';

class AvaliacaoEstrela extends React.Component {
  render() {
    const { qtd } = this.props;
    const x = 4.5;
    if (qtd > x) {
      return (
        <div>
          <img src="images/estrela.png" alt="Estrela" width="25px" />
          <img src="images/estrela.png" alt="Estrela" width="25px" />
          <img src="images/estrela.png" alt="Estrela" width="25px" />
          <img src="images/estrela.png" alt="Estrela" width="25px" />
          <img src="images/estrela.png" alt="Estrela" width="25px" />
        </div>
      );
    }
    return (
      <div>
        <img src="images/estrela.png" alt="Estrela" width="25px" />
        <img src="images/estrela.png" alt="Estrela" width="25px" />
        <img src="images/estrela.png" alt="Estrela" width="25px" />
        <img src="images/meiaestrela.png" alt="Estrela" width="25px" />
      </div>
    );
  }
}

AvaliacaoEstrela.propTypes = {
  qtd: PropTypes.number.isRequired,
};

export default AvaliacaoEstrela;
