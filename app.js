var express = require('express');
var session = require('express-session');
var path = require('path');
var createSocket = require('./api/services/SocketService').create;
var app = express();
var server = require('http').Server(app);

app.use(session({
  secret: 'JHD=JF@%$WHATEVER',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

createSocket(server);

server.listen(9826, function () {
  console.log('server listening port 9826');
});
