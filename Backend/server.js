// Lê os dados do arquivo .env
require('dotenv').config()

// Importa os frameworks
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

// Conecta ao banco de dados
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('conectado ao banco de dados'))

// Cria o servidor web
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Configura o servidor web
app.use(cors())
app.use(express.json())

// Configura os roteamentos
app.use('/produtos', require('./rotas/produtos'));
app.get('/cozinha', (req, res) => {
	io.emit('cozinha', 'pedidos atualizados');
	res.send('atualização enviada para os clientes');
});

io.on('connection', socket => { // o socket representa o cliente
  console.log('um novo usuario está conectado 😄');

  socket.on('disconnect', () => {
    console.log('um usuário desconectou 😞');
  });
});

// Inicia o servidor web
http.listen(5000, () => console.log('servidor iniciado com sucesso'))