const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
    fs.readFile('data.json',(err,data)=>{
        if(err)
            {
                res.writeHead(500,{'Content-Type':'application/json'});
                res.write(JSON.stringify({error:'error'}));
                res.end()
            }
        else
            {
                res.writeHead(200,{'Content-Type':'application/json'});
                res.write(JSON.stringify(JSON.parse(data.toString())));
                res.end()
            }
            
        }
            
            )
}
).listen(3000)