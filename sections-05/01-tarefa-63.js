/**
 * Arquivo referente à "Tarefa 2 - Time to Practice - Express.js"
 */
import express from 'express';

const app = express();

const messages = [];

/**
 * Rotas sem filtro
 */
// app.use((request, response, next) => {
//   messages.push('Rota 1');
//   next();
// });

// app.use((request, response, next) => {
//   messages.push('Rota 2');
//   response.send({ messages });
// });

/**
 * A rota /users deve aparecer primeiro, pois o teste
 * não é "exact"
 *
 * Essas rotas são denominadas "filtered routes", cujo
 * caminho "começa com a string do filtro"
 */
app.use('/users', (request, response, next) => {
  messages.push('Acesso em /users');
  return response.json({ messages });
});

app.use('/', (request, response, next) => {
  messages.push('Acesso em /');
  return response.json({ messages });
});

app.listen(3001, () => {
  console.log('Servidor iniciado na porta 3001');
});
