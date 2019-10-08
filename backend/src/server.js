const express = require('express');

const app = express();

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

app.use(express.json());

app.get('/', (req, res) => {
  return res.json('Hello World');
});

app.listen(3333);