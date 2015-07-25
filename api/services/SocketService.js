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
    var url = socket.request.headers.referer;
    var splited = url.split('/');
    var roomID = splited[splited.length - 1];
    console.log('a user connected');

    socket.join(roomID);    // 加入房间
  });

  global.socketIO = socketIO; // globally

  return socketIO;
}

module.exports = {
  create: create
};