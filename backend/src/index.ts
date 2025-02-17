import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';

const app = express();

const server = http.createServer(http);

const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

io.on('connection', (socket: Socket) => {
  console.log('A user connected Socket ID:', socket.id);
});

server.listen(3000, () => {
  console.log('Server is listening on PORT: 3000')
})