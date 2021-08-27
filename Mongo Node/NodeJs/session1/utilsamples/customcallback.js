function testCustomCall(message,callback){
    console.log("Custom CallRuning: "+message);
    if(typeof callback=="funnction"){
        callback()
    }
}
testCustomCall("Testing CallBack Function",function myFunction(){
    console.log("This is simple Functio passed as an argument");
}
);