const http = require('http');

const server = http.createServer(async (req, res) => {
  // Simulate a long-running task using async/await to avoid blocking
  await new Promise(resolve => setTimeout(resolve, 5000)); // Simulate long I/O operation

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});