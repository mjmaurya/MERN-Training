const http=require('http');

var server = http.createServer(function(req, res) {
    if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>Hello Folks!!</h1>")
        res.end()
    }
    else if (req.url == '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>About</h1>")
        res.end()
    }
    else if (req.url == '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>Contact</h1>")
        res.end()
    }
    else if (req.url == '/data') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({"name":"Domo One"}));
        res.end()
        
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write("<h1 style='color:red; font-weight:bold;'>404 Not Found</h1>")
        res.end()
    }
});

server.listen(3000,()=>{console.log(`Server is running ${server.address().port}`)});