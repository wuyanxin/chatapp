/**
  * Copyright (c) 2015 Meizu bigertech, All rights reserved.
  * http://www.bigertech.com/
  * @author wuyanxin
  * @date  15/7/21
  * @description 
  *  
  */

var ChatService = require('../services/ChatService');

function say(req, res) {
  var roomID = req.params.roomID;
  var message = req.params.message;
  var userSID = req.sessionID;
  var nickname = req.session.nickname;

  ChatService.say(roomID, {
    message: message,
    userSID: userSID,
    nickname: nickname
  });

  res.send({result: 'success'});
}

module.exports = {
  say: say
};
