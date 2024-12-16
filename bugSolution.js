const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    try {
      if (req.url === '/error') {
        throw new Error('Something went wrong!');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!');
      }
    } catch (error) {
      console.error('Error:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  }, 100); // Simulate some delay
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});