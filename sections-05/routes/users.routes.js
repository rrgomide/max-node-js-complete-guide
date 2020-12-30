import express from 'express';

const usersRouter = express.Router();

usersRouter.get('/users', (request, response, next) => {
  const html = `
    <h1>Usuários</h1>
  `;

  return response.send(html);
});

export default usersRouter;
