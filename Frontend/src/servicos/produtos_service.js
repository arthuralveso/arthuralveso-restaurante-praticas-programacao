import api from './api';

// Alguns dados de exemplo
let DADOS = [
  {id: 0, nome: 'Coca-Cola Lata',    preco:  3.0, foto: 'https://d3efjz1jvymzgz.cloudfront.net/Custom/Content/Products/10/11/1011792_refrigerante-coca-cola-lata-350ml-fardo-c-12-unidades_m1_637051111791632885.png'},
  {id: 1, nome: 'Suco de Laranja',   preco:  8.0, foto: 'https://image.freepik.com/fotos-gratis/jarra-de-suco-de-laranja-e-frutas-laranja-isoladas_80510-975.jpg'},
  {id: 2, nome: 'Batata Frita',      preco: 11.0, foto: 'https://cdn.panelinha.com.br/receita/953607600000-Batata-frita-tradicional.jpg'},
  {id: 3, nome: 'Pão de Alho',       preco: 10.0, foto: 'https://www.receitasnestle.com.br/images/default-source/recipes/pao_de_alho.jpg'},
  {id: 4, nome: 'Filé a Parmegiana', preco: 18.0, foto: 'https://leianoticias.com.br/wp-content/uploads/Fil%C3%A9-capa.jpg'},
  {id: 5, nome: 'Feijoada',          preco: 35.0, foto: 'https://img.cybercook.com.br/receitas/776/feijoada-623x350.jpeg'}
];


// Implementação das funções CRUD
const getProdutos = api.get('produtos');


const getProduto = (idProduto) => {
  return DADOS.filter(p => p.id === idProduto)[0];
};

const adicionarProduto = (produto, callback) => {
  let proxId = 0;
  if (DADOS.length > 0) {
    proxId = Math.max(...DADOS.map(p => p.id)) + 1;
  }
  produto.id = proxId;
  DADOS = [...DADOS, produto];
  callback();
};

const removerProduto = (idProduto, callback) => {
  let index = DADOS.findIndex(p => p.id === idProduto);
  if (index >= 0) {
    DADOS = [...DADOS.slice(0, index), ...DADOS.slice(index + 1)];
  }
  callback();
};

const editarProduto = (produto, callback) => {
  let index = DADOS.findIndex(p => p.id === produto.id);
  DADOS[index] = produto;
  callback();
};

// Criando objeto singleton para exportar o serviço
const ProdutosService = {
  getProdutos,
  getProduto,
  adicionarProduto,
  removerProduto,
  editarProduto
};

// Exportando o serviço
export default ProdutosService;