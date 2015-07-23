/**
  * Copyright (c) 2015 Meizu bigertech, All rights reserved.
  * http://www.bigertech.com/
  * @author wuyanxin
  * @date  15/7/21
  * @description 
  *  
  */

var RoomService = require('../services/RoomService');

/**
 * 创建房间
 * @param req
 * @param res
 */
function create(req, res) {
  var roomName = req.params.roomName;
  var userSID = req.sessionID;
  var username = req.session.nickname;

  var room = RoomService.createRoom(roomName, userSID, username);
  res.render('newRoom', room);
  //res.send({room: room});
}

/**
 * 加入房间
 * @param req
 * @param res
 */
function join(req, res) {
  var roomID = req.params.roomID;
  var userSID = req.sessionID;
  var username = req.session.nickname;

  try {
    var room = RoomService.joinRoom(roomID, userSID, username);
    res.render('room', room);
    //res.send({room: room});
  } catch (e) {
    res.send(e.message);
  }
}

/**
 * 离开房间
 * @param req
 * @param res
 */
function leave(req, res) {
  var roomID = req.params.roomID;
  var userSID = req.sessionID;

  var result = RoomService.leaveRoom(roomID, userSID);
  res.send({result: result});
}

module.exports = {
  create: create,
  join: join,
  leave: leave
};
