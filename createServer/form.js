const http = require('http')

http.createServer( (req, res) => {
    res.writeHead(200, {"content-type": 'text/html'})
    
    if(req.url == '/'){
        res.write(`
            <form>
                <input type = "text" placeholder = "Enter Name" name = 'name'/>
                <input type = "text" placeholder = "Enter Email" name = 'email'/>
                <button>Submit<button/>
            </form>
        `);
    } else if(req.url == '/submit'){
        res.write('<h1>Data Submitted</h1>')
    }

    res.end()
} ).listen(3000)