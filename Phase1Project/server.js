const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./index.html').pipe(res);
    }
    else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./about.html').pipe(res);
    }
    else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./contact.html').pipe(res);
    }
    else if (req.url === '/blogs') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./blogs.html').pipe(res);
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream('./404.html').pipe(res);
    }
    }).listen(8080);
