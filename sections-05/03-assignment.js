import express from 'express';
import path from 'path';

import assignmentRouter from './routes/assignment.routes.js';

const app = express();
app.use(express.static(path.join('public')));
app.use(assignmentRouter);

app.listen(3001, () => {
  console.log('Servidor iniciado na porta 3001');
});
