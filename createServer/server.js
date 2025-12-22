const http = require('http');

http.createServer( (req, res)=>{
    res.write("<h1>Hello this is Divyansh</h1>")
    res.end("Hello");
} ).listen(3000);



