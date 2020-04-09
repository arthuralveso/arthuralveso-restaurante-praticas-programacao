import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

function Conteudo() {
  return (
    <Jumbotron>
      <h1>Exemplo CRUD</h1>
      <p>
        Esse é um exemplo de CRUD com React + React Router + React Bootstrap + RxJS + MongoDB
      </p>
      <p>
        Agora vai um parágrafo apenas para ocupar espaço: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        <Button variant="primary">Esse botão não faz nada</Button>
      </p>
    </Jumbotron>
  );
}

export default Conteudo;