/* eslint-disable no-console */
module.exports = class extends think.Controller {
  constructor(...arg) {
    super(...arg);
    this.room = 'room1';
  }
  openAction() {
    console.log('ws open');
    this.emit('opend', 'This client opened successfully!')
    return this.success();
  }
  closeAction() {
    console.log('ws close');
    return this.success();
  }
  addUserAction() {
    console.log('addUserAction ...');
    return this.success();
  };
  joinRoomAction() {
    const roomid = this.wsData;
    var io = this.ctx.app.websocket.io;
    var socket = this.websocket;
    socket.join(roomid, () => {
      const rooms = Object.keys(socket.rooms)[1];
      console.log(rooms); // [ <socket.id>, 'room 237' ]
      io.in(rooms).emit('system', 'a new user has joined the room'); // broadcast to everyone in the room
    });
    // console.log(this.websocket.in('test'));
    // this.websocket.to('test').emit('joind', 'data');
    // .emit('system', 'hello,' + this.wsData + '加入了房间');
    // this.req.websocket, websocket instance
    // console.log(this.isWebsocket); // this.isMethod('WEBSOCKET'), true
    return this.success();
  }
}