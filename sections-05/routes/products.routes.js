import express from 'express';

const productsRouter = express.Router();

productsRouter.get('/products', (request, response, next) => {
  const html = `
    <h1>Produtos</h1>
  `;

  return response.send(html);
});

export default productsRouter;
