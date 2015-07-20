var express = require('express');
var session = require('express-session');
var path = require('path');
var createSocket = require('./api/services/SocketService').create;
var router = require('./config/router.js');
var app = express();
var server = require('http').Server(app);

app.use(session({
  name: 'chatapp.sid',
  secret: 'JHD=JF@%$WHATEVER',
  resave: true,
  saveUninitialized: false,
  cookie: { maxAge: 5 * 60 * 1000 }
}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use('/', router);

createSocket(server);

server.listen(9826, function () {
  console.log('server listening port 9826');
});
