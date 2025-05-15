import { WebSocketServer } from 'ws';
import chalk from 'chalk';

const wss = new WebSocketServer({ port: 8080 });
console.log(chalk.green('[Servidor]: Servidor WebSocket ejecutándose en ws://localhost:8080'));

const clients = new Map();
let isMessageSent = false; // Para asegurarse de que el mensaje se envíe solo una vez
let isServerClosing = false; // Para evitar que el servidor se cierre varias veces

wss.on('connection', (ws) => {
  console.log(chalk.green('[Servidor]: Cliente conectado.'));

  let userName = '';

  ws.on('message', (data) => {
    const message = data.toString();

    // Si el usuario aún no tiene nombre, se lo asignamos
    if (!userName) {
      userName = message;
      clients.set(ws, userName);
      sendGlobal(`[Servidor]: El usuario "${userName}" se ha unido al chat.`, ws);
      return;
    }

    // Retransmitir el mensaje solo con el nombre del usuario
    sendGlobal(`${userName}: ${message}`, ws);
  });

  ws.on('close', () => {
    if (userName) {
      clients.delete(ws);
      sendGlobal(`[Servidor]: El usuario "${userName}" ha salido del chat.`);
    }
  });

  // Enviar el mensaje de cierre solo una vez
  if (!isMessageSent) {
    isMessageSent = true;

    // Enviar mensaje global después de 1 minuto
    setTimeout(() => {
      sendGlobal('[Servidor]: El chat se cerrará en 10 minutos.');

      // Cerrar el servidor automáticamente después de 10 minutos
      setTimeout(() => {
        if (!isServerClosing) {
          isServerClosing = true;
          sendGlobal('[Servidor]: El servidor ha sido cerrado.');

          // Cerrar la conexión de todos los clientes
          wss.clients.forEach(client => {
            if (client.readyState === client.OPEN) {
              client.close();
            }
          });

          wss.close(() => {
            process.exit(0);
          });
        }
      }, 10 * 60 * 1000); // 10 minutos
    }, 1 * 60 * 1000); // Espera 1 minuto antes de avisar
  }
});

// Función para enviar a todos los clientes, con prefijo [Servidor] si es necesario
function sendGlobal(message, sender = null) {
  for (const client of wss.clients) {
    if (client.readyState === client.OPEN && client !== sender) {
      client.send(message);
    }
  }

  // Mostrar una sola vez el mensaje en la terminal del servidor
  if (message.startsWith('[Servidor]:')) {
    console.log(chalk.yellow(message)); // Mensajes del servidor en amarillo
  } else {
    console.log(chalk.white(message)); // Mensajes de los clientes en blanco
  }
}