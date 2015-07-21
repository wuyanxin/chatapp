/**
  * Copyright (c) 2015 Meizu bigertech, All rights reserved.
  * http://www.bigertech.com/
  * @author wuyanxin
  * @date  15/7/21
  * @description 
  *  
  */

var uuid = require('uuid');
// 记录当前保存的房间,这里只是简单地保存到内存
var rooms = {};

/**
 * 创建新房间
 * @param roomName
 * @param userSid
 * @param username
 * @returns {object}
 */
function createRoom(roomName, userSid, username) {
  var roomID = uuid.v4();
  var room = {
    id: roomID,
    owner: userSid,
    ownerName: username,
    name: roomName,
    users: {}
  };
  rooms[roomID] = room;

  console.log('a new room is created: ');
  console.log(room);
  return room;
}

/**
 * 用户加入房间
 * @param roomID
 * @param userSID
 * @returns {boolean}
 */
function joinRoom(roomID, userSID, username) {
  var room = rooms[roomID];

  if (!room) {
    throw new Error('this room is shit');
  }

  room.users[userSID] = username;
  console.log(username + ' join to room:' + room.name);
  return room;
}

/**
 * 退出房间
 * @param roomID
 * @param userSID
 * @returns {boolean}
 */
function leaveRoom(roomID, userSID) {
  var room = rooms[roomID];
  var username = room[userSID];

  if (room) {
    delete room[userSID];
    console.log(username + ' leave from room:' + room.name);
    return true;
  }
  return false;
}


module.exports = {
  createRoom: createRoom,
  joinRoom: joinRoom,
  leaveRoom: leaveRoom
};