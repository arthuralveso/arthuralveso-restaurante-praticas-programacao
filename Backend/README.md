# Backend para o app do restaurante

Esse é um backend escrito em Node.js para o app do restaurante.

## Pré-requisitos

É necessário ter:
* Node.js
* MongoDB - se você tiver o docker, é possível executar o MongoDB da seguinte forma:

```bash
docker run -it --rm -p 27017:27017 -p 28017:28017 -e AUTH=no mongo
```

## Como executar o projeto

```bash
git clone https://github.com/brunogamacatao/restaurante-backend
cd restaurante-backend
npm
npm start
```
O servidor executará na porta 5000
