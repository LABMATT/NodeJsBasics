// Gets socket io running.
const { Socket } = require('socket.io');

// inports sql libray.
var mysql = require('mysql');

// Sets up an express server for for socket io to communicate on.
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
  }
});


// Initiate the connection wiht sql database.
var con = mysql.createConnection({
  host: "10.0.0.176",
  user: "service",
  password: "compassion"
});

// If the sql server could not connect then throw an error.
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// 
io.on('connection', (socket) => {
  socket.on('omsg', (msg) => {

  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});


io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

