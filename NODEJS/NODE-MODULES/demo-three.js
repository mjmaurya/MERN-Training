const http = require('http');
const fs = require('fs');

var server=http.createServer(function(req,res){
    if (req.method=='GET'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream('./index.html','utf-8').pipe(res);
    }
    else if (req.method=='POST'){
        var body='';
        req.on('data',function(data){
            body+=data;
        }
        );
        req.on('end',function(){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(body);
            res.end();
        }
        );
    }
}
)
server.listen(3000);