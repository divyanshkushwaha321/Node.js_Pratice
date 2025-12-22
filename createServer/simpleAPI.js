const http = require('http');

const userData = [
    {
        name:"Divyansh",
        age:22,
        email: "divyansh@gmail.com"
    },
    {
        name:"Atharva",
        age:22,
        email: "atharva@gmail.com"
    },
    {
        name:"Chetan",
        age:22,
        email: "chetan@gmail.com"
    },
]

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", 'application/json');
    res.write(JSON.stringify(userData));
    
    res.end()
})
server.listen(3000)

