import express from 'express';

const assignmentRouter = express.Router();

assignmentRouter.get('/view01', (_, response) => {
  response.sendFile('view01.html', { root: './views' }); // __dirname não funciona com type: module
});

assignmentRouter.get('/view02', (_, response) => {
  response.sendFile('view02.html', { root: './views' });
});

export default assignmentRouter;
