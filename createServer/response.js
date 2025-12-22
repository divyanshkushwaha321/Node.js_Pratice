const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Divyansh")
})

server.listen(3000)