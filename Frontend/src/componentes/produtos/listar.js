import React, {useState, useEffect} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import api from '../../servicos/api';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ListarProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get('produtos')
    .then(response => {
      setProdutos(response.data)
    })
  }, [produtos]);

  const renderProduto = (produto) => {
    return (
      <Card className="produto" key={produto._id}>
        <Card.Img variant="top" src={produto.foto} />
        <Card.Body>
          <Card.Title>{produto.nome}</Card.Title>
          <LinkContainer to={`/produtos/${produto._id}`}>
            <Button variant="primary" block>Visualizar</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div className="listaDeProdutos">
      { produtos.map(renderProduto) }
    </div>
  );
}

export default ListarProdutos;