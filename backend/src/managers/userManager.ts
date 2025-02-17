import { Socket } from "socket.io"
import { RoomManager } from "./roomManager";

let ROOM_ID = 1;

export interface User {
  socket: Socket,
  name: string
}

export class UserManager {
  private users: User[];
  private queue: string[];
  private roomManager: RoomManager

  constructor() {
    this.users = [];
    this.queue = [];
    this.roomManager = new RoomManager();
  }

  addUser(name: string, socket: Socket) {
    const user = {
      name,
      socket
    }

    this.users.push(user);
    this.queue.push(socket.id);
    this.clearQueue();
    this.initHandler(socket);
  }

  removeUser(socketId: string) {
    this.users = this.users.filter(user => user.socket.id !== socketId);
    this.queue = this.queue.filter(id => id !== socketId);
  }

  clearQueue() { // This functon matches peoples to talk to each other
    if(this.queue.length < 2) return;

    const user1 = this.users.find(user => user.socket.id === this.queue.pop()); // This finds 2 users on from the users array from the socket id in the queue array
    const user2 = this.users.find(user => user.socket.id === this.queue.pop());

    if(!user1 || !user2) return;

    const roomId = this.generateRoomId();

    user1?.socket.emit('new-room', {
      type: 'send-offer',
      roomId
    })
  }

  initHandler(socket: Socket) {
    socket.on('offer', ({ sdp, roomId }: {sdp: string, roomId: string}) => {
      this.roomManager.onOffer(roomId, sdp);
    });

    socket.on('answer', ({ sdp, roomId }: {sdp: string, roomId: string}) => {
      this.roomManager.onAnswer(roomId, sdp);
    });
  }

  generateRoomId() {
    return ROOM_ID++;
  }
}