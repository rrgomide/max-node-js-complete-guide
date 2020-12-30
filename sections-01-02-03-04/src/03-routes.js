import http from 'http';

import routes from './routes/routes.js';

const server = http.createServer(routes);

const PORT = 3001;
server.listen(PORT);
console.log(`Servidor iniciado na porta ${PORT}`);
