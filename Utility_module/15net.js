// 15.	program for demonstrating any 5 functions of Net utility module

const net = require('net');

console.log("ip add :", net.isIP('127.0.0.1')); // 4
console.log("Ipv4 :", net.isIPv4('127.0.0.1')); // true
console.log("Ipv6 :", net.isIP('::1')); // 6 (fixed from '::-1')
console.log(typeof net.createConnection); // function

const server = net.createServer((socket) => {
  console.log("connected");
  socket.write("Request from server\n");
});

server.listen(3000, () => {
  console.log("server started");
});
