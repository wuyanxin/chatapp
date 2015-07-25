var express = require('express');
var router = express.Router();
var UserController = require('../api/controllers/UserController');
var RoomController = require('../api/controllers/RoomController');
var ChatController = require('../api/controllers/ChatController');

// index
router.get('/', function (req, res) {
  res.render('index', {
    nickname: req.session.nickname
  });
});

// user
router.get('/user/setName/:name', UserController.setName);

// room
router.get('/room/create/:roomName', RoomController.create);
router.get('/room/:roomID', RoomController.join);
router.get('/room/leave/:roomID', RoomController.leave);

// chat
router.get('/chat/:roomID/:message', ChatController.say);

module.exports = router;
