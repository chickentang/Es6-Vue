const http = require('http');
//const test = require('./src/es6_learning/promise/create_promise');

// require('./src/es6_learning/promise/promise_all');
// require('./src/es6_learning/promise/promise_race');

require('./src/es6_learning/promise/async_await');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});