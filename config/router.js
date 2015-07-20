var express = require('express');
var router = express.Router();
var UserController = require('../api/controllers/UserController');

router.get('/', function (req, res) {
  console.log(req.session.nickname);
  res.render('index', {
    nickname: req.session.nickname
  });
});

router.get('/user/setName/:name', UserController.setName);

module.exports = router;
