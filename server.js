'use strict';

const express = require('express');
const app = express();
const http = require('http').Server(app);
const fs = require('fs');
const redis = require('redis');
const Twitter = require('twiiter');
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

//other stuff will go here after i've gotten some sleep

app.use(express.static(__dirname + '/app'));
app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/four_oh_four.html')
});

http.listen(port, () =>
  console.log('listening on port ' + port);
);
