const mongoose = require('mongoose');
// const ChatModel=mongoose.model("allChats");
mongoose.connect('mongodb://localhost:27017/ChatBox',{ useNewUrlParser: true }, (error)=>{
    if(!error){
        console.log("Connected Yippee..!!");
    }else{
        console.log("Error connecting to database.");
    }
});
const express = require('express');
const app = express();
const http=require('http').Server(app);
const io=require('socket.io')(http);
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname ));

// Connect to MongoDB
var Chats=mongoose.model("Chats",{
    username:String,
    chat:String
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/chats', async (req, res) => {
    try{
        var chat=new Chats(req.body)
    console.log(chat)
    await chat.save()
    res.sendStatus(200)
    io.emit("chat",req.body);
    }
    catch(error){
        res.sendStatus(500)
        console.error(error)
    }
});
app.get('/chats', (req, res) => {
    Chats.find().then((chats)=>{
        res.sendFile(__dirname + '/index.html');
    }
    ,(e)=>{
        res.send(e);
    }
    );
});

var server=http.listen(3020,()=>{
    console.log("Well Done,Now Server listening on ")
})