const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

// const formatMessage = require("./utils/messages");
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./utils/users");

const app = express();

const server = http.createServer(app);
const io = socketio(server);

const botName = "Admin";

// Set static folder
app.use(express.static(path.join(__dirname, "client")));

// Run when client connects
io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    // Welcome current user
    // socket.emit("message", formatMessage(botName, "Welcome to CharCord!"));

    // Broadcast when a user connects
    //broadcast.emit() shows a messages to everyone but the current client.
    // socket.broadcast
    //   .to(user.room)
    //   .emit(
    //     "message",
    //     formatMessage(botName, `${user.username} has joined the chat`)
    // );

    // Send users and room info
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  //all clients in general
  //   io.emit()

  //Listen for chat message
  // socket.on("chatMessage", (msg) => {
  //   const user = getCurrentUser(socket.id);
  //   io.to(user.room).emit("message", formatMessage(user.username, msg));
  // });

  // Runs when client disconnects
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);

    if (user) {
      // io.to(user.room).emit(
      //   "message",
      //   formatMessage(botName, `${user.username} has left the chat`)
      // );

      // Send users and room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
