import React from 'react';

class Plano extends React.Component {
  render() {
    return (
      <div className="planoNegocios">
        <img className="DollarRotate" src="images/gear-dollar.png" alt="dolar" />
        <h1>
          Plano de Negócios
        </h1>
        <ol>
          <li>Ramo: Tecnologia</li>
          <li>Vende-se: Produtos</li>
          <li>Nome: GameCenter</li>
          <li>Divulgação: Internet</li>
          <li>Investimentos: Dominio de site, Banco de dados em nuvem, funcionario na area de TI, Serviço bancario (exemplo SicoobCredialto).</li>
        </ol>
      </div>
    );
  }
}

export default Plano;
