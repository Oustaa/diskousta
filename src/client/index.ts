const net = require("node:net");

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "127.0.0.1";

const clientSocket = net.connect({
  port: PORT,
  host: HOST,
});

