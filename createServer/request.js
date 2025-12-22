const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "application/json")
    if(req.url == "/"){
        res.write("<h1>Home Page</h1>")
    }
    else if(req.url == "/login"){
        res.write("Login Page")
    }
    else{
        res.write("Other Page")
    }
    res.end()
})

server.listen(3000)
