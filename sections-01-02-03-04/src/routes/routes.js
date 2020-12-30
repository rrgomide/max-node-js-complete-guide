import fs from 'fs';
import { v4 as uuid } from 'uuid';

const todos = [];

const routes = (request, response) => {
  const { url, method } = request;

  if (url === '/') {
    const form = `
      <html>
        <head>
          <meta charset='utf-8'>
          <title>Exemplo com form</title>
        </head>

        <body>
          <form action='/message' method='POST'>
            <label for='input'>
              Digite uma tarefa: 
              <input autoFocus type='text' name='inputMessage' id='inputMessage'>
              <button type='submit'>Enviar</button>
            </label>          
          </form>

          <p>Tarefas: </p>

          ${todos.length === 0 ? '<p>Nenhuma tarefa cadastrada</p>' : ''} 

          ${
            todos.length > 0
              ? `
              <ul>
                ${todos
                  .map(({ id, description }) => {
                    return `
                    <li id=${id}>${description}</li>
                  `;
                  })
                  .join('')}
              </ul>
            `
              : ''
          } 
        </body>
      </html>
    `;

    response.write(form);
    return response.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];

    request.on('data', chunk => {
      console.log('Recebendo chunk de dados...');
      body.push(chunk);
    });

    request.on('end', () => {
      console.log('Fim do envio de dados');

      const fullData = Buffer.concat(body).toString();
      const [_, value] = fullData.split('='); // inputMessage=mensagem
      todos.push({ id: uuid(), description: value });

      console.log('Escrevendo log...');
      fs.writeFile(
        './files/todos.json',
        JSON.stringify(todos, null, 2),
        error => {
          if (error) {
            console.log(`Erro ao gravar log: ${error}`);
          } else {
            console.log('Log escrito com sucesso!');
            console.log('Redirecionando para "/"');
          }

          // Redirecionamento
          response.statusCode = 302;
          response.setHeader('Location', '/');
          return response.end();
        }
      );
    });
  }
};

export default routes;
