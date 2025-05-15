import { WebSocket } from 'ws';
import readline from 'readline';
import chalk from 'chalk';

const socket = new WebSocket('ws://localhost:8080');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let username = '';
let waitingForUsername = true;

socket.on('open', () => {
  console.log(chalk.green('Conectado al servidor WebSocket.'));
  rl.question(chalk.blue('Bienvenido al chat. Por favor, ingresa tu nombre de usuario: '), (name) => {
    username = name.trim();
    if (username) {
      socket.send(username);
      console.log(chalk.green(`Conectado al chat como "${username}".\n`));
      rl.setPrompt(`${chalk.cyan(username)}: `);
      rl.prompt();
      waitingForUsername = false;
    } else {
      console.log(chalk.red("Por favor, ingresa un nombre válido."));
      process.exit(0);
    }
  });
});

socket.on('message', (data) => {
  const message = data.toString();

  // Borrar la línea donde el usuario está escribiendo
  readline.clearLine(process.stdout, 0);
  readline.cursorTo(process.stdout, 0);

  if (message.startsWith('[Servidor]:')) {
    console.log(chalk.yellow(message)); // Mensajes del servidor en amarillo
  } else if (message.startsWith(`${username}:`)) {
    console.log(chalk.green(message)); // Mensajes propios en verde
  } else {
    console.log(chalk.white(message)); // Mensajes de otros usuarios en blanco
  }

  // Volver a mostrar el prompt
  rl.prompt();
});

socket.on('close', () => {
  // Borrar la línea actual antes de imprimir desconexión
  readline.clearLine(process.stdout, 0);
  readline.cursorTo(process.stdout, 0);
  console.log('\n' + chalk.red('Desconectado del servidor.'));
  process.exit(0);
});

rl.on('line', (line) => {
  if (!waitingForUsername) {
    const trimmed = line.trim();
    if (trimmed) {
      socket.send(trimmed);
    }
    rl.prompt();
  }
});