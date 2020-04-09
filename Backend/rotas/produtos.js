const express = require('express')
const router = express.Router()
const Produto = require('../modelo/produto');

// função de middleware para recuperar um produto pelo id
async function getProduto(req, res, next) {
  try {
    res.produto = await Produto.findById(req.params.id)
    if (res.produto === null) {
      return res.status(404).json({ message: 'Nao foi possivel encontrar um produto com o id informado'})
    }
  } catch(err){
    return res.status(500).json({ message: err.message })
  }

  next()
}

// inicializa o banco com dados de teste
router.get('/popula', async (req, res) => {
  await new Produto({'nome': 'Coca-Cola Lata', 'valor': 3.0, 'tipo': 'Bebida', 'foto': 'https://d3efjz1jvymzgz.cloudfront.net/Custom/Content/Products/10/11/1011792_refrigerante-coca-cola-lata-350ml-fardo-c-12-unidades_m1_637051111791632885.png'}).save();
  await new Produto({'nome': 'Suco de Laranja - Jarra', 'valor': 8.0, 'tipo': 'Bebida', 'foto': 'https://image.freepik.com/fotos-gratis/jarra-de-suco-de-laranja-e-frutas-laranja-isoladas_80510-975.jpg'}).save();
  await new Produto({'nome': 'Batata Frita', 'valor': 11.0, 'tipo': 'Petisco', 'foto': 'https://cdn.panelinha.com.br/receita/953607600000-Batata-frita-tradicional.jpg'}).save();
  await new Produto({'nome': 'Pão de Alho', 'valor': 10.0, 'tipo': 'Petisco', 'foto': 'https://teretetenacozinha.com.br/wp-content/uploads/2019/02/P%C3%A3o-de-Alho-com-r.save()equeij%C3%A3o.png'}).save();
  await new Produto({'nome': 'Filé a Parmegiana', 'valor': 18.0, 'tipo': 'Refeição', 'foto': 'https://leianoticias.com.br/wp-content/uploads/Fil%C3%A9-capa.jpg'}).save();
  await new Produto({'nome': 'Feijoada', 'valor': 35.0, 'tipo': 'Refeição', 'foto': 'https://img.cybercook.com.br/receitas/776/feijoada-623x350.jpeg'}).save();

  res.status(201).json({"status": "sucesso"});
})

// retorna todos os produtos
router.get('/', async (req, res) => {
  res.json(await Produto.find());
})

// retorna um produto pelo id
router.get('/:id', getProduto, async (req, res) => {
  res.json(res.produto);
})

// cria um produto
router.post('/', async (req, res) => {
  const novoProduto = await new Produto(req.body).save();
  res.status(201).json(novoProduto);
})

// remove um produto
router.delete('/:id', getProduto, async (req, res) => {
  await res.produto.remove()
})

// atualiza um produto pelo id
router.patch('/:id', getProduto, async (req, res) => {
  res.produto.nome = req.body.nome;
  res.produto.valor = req.body.valor;
  res.produto.tipo = req.body.tipo;
  res.produto.foto = req.body.foto;
  const produtoAtualizado = await res.produto.save();
  res.json(produtoAtualizado);
})

module.exports = router