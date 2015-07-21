/**
  * Copyright (c) 2015 Meizu bigertech, All rights reserved.
  * http://www.bigertech.com/
  * @author wuyanxin
  * @date  15/7/21
  * @description 
  *  
  */

// 记录当前保存的房间,这里只是简单地保存到内存
var rooms = {};

/**
 * 创建新房间
 * @param roomID
 * @param roomName
 * @param userSid
 * @param username
 * @returns {boolean}
 */
function createRoom(roomID, roomName, userSid, username) {
  if (rooms[roomID]) {
    return false;
  }

  rooms[roomID] = {
    owner: userSid,
    ownerName: username,
    name: roomName,
    users: {}
  };
  return true;
}

/**
 * 用户加入房间
 * @param roomID
 * @param userSID
 * @returns {boolean}
 */
function joinRoom(roomID, userSID, username) {
  var room = rooms[roomID];

  if (room && !room.users[userSID]) {
    room.users[userSID] = username;
    return true;
  }
  return false;
}

/**
 * 退出房间
 * @param roomID
 * @param userSID
 * @returns {boolean}
 */
function leaveRoom(roomID, userSID) {
  var room = rooms[roomID];
  if (room) {
    delete room[userSID];
    return true;
  }
  return false;
}


module.exports = {
  createRoom: createRoom,
  joinRoom: joinRoom,
  leaveRoom: leaveRoom
};