const http = require('http');
const fs = require('fs');
var blogs=['/blogs/what-is-git','/blogs/important-git-commands'];
http.createServer((req, res) => {
    console.log(req.url);
   try{
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
    else if (blogs.includes( req.url )) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('.'+req.url+'.html').pipe(res);
    }
    else if (req.url === '/newblog') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./newBlog.html').pipe(res);
    }
    else if (req.url === '/login') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./login.html').pipe(res);
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream('./404.html').pipe(res);
    }
   }catch(e){
        res.writeHead(500, {'Content-Type': 'text/html'});
        fs.createReadStream('./404.html').pipe(res);
   }
    }).listen(8080);
