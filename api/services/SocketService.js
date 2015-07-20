var IO = require('socket.io');
var socketIO = null;

/**
 * 创建socket服务器
 * @param server
 * @returns {*}
 */
function create(server) {
  var socketIO = IO(server);

  socketIO.on('connection', function (socket) {
    console.log('a user connected');
  });

  return socketIO;
}

/**
 * 获取socket服务器对象
 * @returns {*}
 */
function getIO() {
  if (!socketIO) {
    throw new Error('socket.io is not inited');
  }
  return socketIO;
}

module.exports = {
  create: create,
  getIO: getIO
};