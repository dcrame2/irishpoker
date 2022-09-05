const { decodePacket } = require("engine.io-parser");
let express = require("express");
const serveStatic = require("serve-static");
let app = express();
let serv = require("http").Server(app);
// const { io } = require("socket.io-client");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/client/index.html");
});
app.use("/client", express.static(__dirname + "/client"));

serv.listen(2000);
console.log("Server started");

let SOCKET_LIST = {};
let PLAYER_LIST = {};
let playerCount = 0;

let Player = function (id) {
  let self = {
    id: id,
    number: playerCount,
    // number: "" + Math.floor(6 * Math.random()),
  };
  return self;
};

let io = require("socket.io")(serv, {});
io.sockets.on("connection", function (socket) {
  socket.id = playerCount++;

  SOCKET_LIST[socket.id] = socket;

  let player = Player(socket.id);
  PLAYER_LIST[socket.id] = player;
  console.log(player);

  socket.on("disconnect", function () {
    delete SOCKET_LIST[socket.id];
    delete PLAYER_LIST[socket.id];
  });

  socket.on("startGame", function () {
    io.emit("startGame", clearInterval(myInterval));
  });
});

const myInterval = setInterval(function () {
  let pack = [];
  for (let i in PLAYER_LIST) {
    let player = PLAYER_LIST[i];
    // console.log(player);
    pack.push({
      id: player.id,
      number: player.number,
    });
  }

  for (let i in SOCKET_LIST) {
    let socket = SOCKET_LIST[i];
    socket.emit("newPositions", pack);
  }
}, 5000 / 25);
