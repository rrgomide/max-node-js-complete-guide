import express from 'express';

const notFoundRouter = express.Router();

notFoundRouter.use((request, response, next) => {
  const html = `
    <h1>Página não encontrada!</h1>
  `;

  return response.status(404).send(html);
});

export default notFoundRouter;
