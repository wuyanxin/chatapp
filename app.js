var express = require('express');
var session = require('express-session');
var path = require('path');
var app = express();

app.use(session({
  secret: 'JHD=JF@%$WHATEVER',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(9826);
