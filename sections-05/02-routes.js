import express from 'express';

import productsRouter from './routes/products.routes.js';
import usersRouter from './routes/users.routes.js';
import mainRouter from './routes/main.routes.js';
import notFoundRouter from './routes/not-found.routes.js';

const app = express();
app.use(express.urlencoded());
app.use(productsRouter);
app.use(usersRouter);

/**
 * Boa prática - / fica por último
 */
app.use(mainRouter);

/**
 * Página não encontrada
 */
app.use(notFoundRouter);

app.listen(3001, () => {
  console.log('Servidor iniciado na porta 3001');
});
