// servidorzinho básico só pra rodar o json-server 
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // se o nome mudar, só trocar aqui
const middlewares = jsonServer.defaults();

server.use(middlewares);

// rotas do json-server
server.use(router);

// porta do Render ou 3000 local
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`🚀 JSON Server rodando lindamente na porta ${port}`);
});
