/**
 * Copyright (c) 2015 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author wuyanxin
 * @date  15/7/25
 * @description
 *
 */

/**
 *
 * @param roomID
 * @param message
 */
function say(roomID, message) {
  socketIO.to(roomID).emit('msg', message);
}

module.exports = {
  say: say
};

