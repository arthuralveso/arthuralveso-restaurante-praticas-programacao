const mongoose = require('mongoose')

const produtoSchema = new mongoose.Schema({
  nome: String,
  valor: Number,
  tipo: String,
  foto: String,
});

module.exports = mongoose.model('Produto', produtoSchema)