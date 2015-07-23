var express = require('express');
var router = express.Router();
var UserController = require('../api/controllers/UserController');
var RoomController = require('../api/controllers/RoomController');

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

module.exports = router;
