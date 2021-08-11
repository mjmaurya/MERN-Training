var names=["John","Paul","George","Ringo"];

/* Demonstrating for loop */
for(var i=0;i<names.length;i++){
    console.log(names[i]);
}

console.log("..........................................");

/* Demonstrating for in loop */
for(var index in names){
    console.log(`${index} : ${names[index]}`);
}

console.log("..........................................");

/* Demonstrating for of loop */
for(var name of names){
    console.log(name);
}

console.log("..........................................");

/* Demonstrating foreach loop */

names.forEach(name=>console.log(name))