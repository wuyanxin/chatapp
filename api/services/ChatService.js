/**
 * Copyright (c) 2015 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author wuyanxin
 * @date  15/7/25
 * @description
 *
 */

/**
 * 发言
 * 根据roomID区分,利用socket.io分发到不同房间
 * @param roomID
 * @param message
 */
function say(roomID, message) {
  socketIO.to(roomID).emit('msg', message);
}

module.exports = {
  say: say
};

