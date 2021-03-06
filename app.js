var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var createSocket = require('./api/services/SocketService').create;
var router = require('./config/router.js');
var app = express();
var server = require('http').Server(app);

app.use(session({
  name: 'chatapp.sid',
  secret: 'JHD=JF@%$WHATEVER',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }
}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(cookieParser());
app.use('/', router);

createSocket(server);

server.listen(9826, function () {
  console.log('server listening on port 9826');
});
