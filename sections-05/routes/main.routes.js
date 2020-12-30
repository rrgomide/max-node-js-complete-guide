import express from 'express';

const mainRouter = express.Router();

mainRouter.get('/', (request, response, next) => {
  const html = `
    <h1>Página inicial</h1>
  `;

  return response.send(html);
});

export default mainRouter;
