const net = require("node:net");

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "127.0.0.1";

// { [username]: socket } => stored in a hash table to ease the read access ( O(1) )
const CONNECTED_USERS = {};

const server = net.createServer();

server.on("connection", () => {
  console.log("A new connection has been established");
});

server.listen(PORT, HOST, () => {
  console.log(server.address());
});

