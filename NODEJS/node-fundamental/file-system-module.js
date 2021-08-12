import fs from 'fs';

// Synchronous VS. Asyncrhonous

//Asychronous or Non-Blocking Approach

// fs.readFile('./data/sampleData1.txt',(error,data)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data.toString());
//     }
// })
// fs.readFile('./data/sampleData2.txt',(error,data)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data.toString());
//     }
// })

// fs.readFile('./data/sampleData3.txt',(error,data)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data.toString());
//     }
// })

// Synchronous Approach(Blocking)

var data1=fs.readFileSync('./data/sampleData1.txt','utf-8');
console.log(data1);
var data2=fs.readFileSync('./data/sampleData2.txt','utf-8');
console.log(data2);
console.log('_____________________The End ______________________');