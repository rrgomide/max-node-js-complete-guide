import http from 'http';

const server = http.createServer((request, response) => {
  const { url, method, headers } = request;
  const { host } = headers;

  const fullUrl = `${host}${url}`;
  const jsonHeaders = JSON.stringify(headers, null, 2);

  const html = `<html>
    <head>
      <meta charset='utf-8'>
      <title>Node.js</title>
    </head>

    <body>
      <p>Você acessou a URL: <strong>${fullUrl}</strong></p>
      <p>Você utilizou o método: <strong>${method}</strong></p>
      <p>A requisição foi feita com os seguintes parâmetros:</p>

      <textarea cols='150' rows='20'>${jsonHeaders}</textarea>
    </body>
  </html>`;

  response.write(html);
  response.end();
});

const PORT = 3001;
server.listen(PORT);
console.log(`Servidor iniciado na porta ${PORT}`);
