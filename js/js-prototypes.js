// function User(){
//     this.name='mj'
//     this.age=20
// }

// var user1=new User()
// user1.gender='Male'
// console.log(`${user1.name}: ${user1.age} ${user1.gender}`)

// var user2=new User()
// console.log(`${user2.name}: ${user2.age} ${user2.gender}`)

function User(){
    this.name='mj'
    this.age=20
}

User.prototype.gender='Male'
User.prototype.display=function(){
    console.log("Hello Folk")
}
var user1=new User()
console.log(`${user1.name}: ${user1.age} ${user1.gender}`)

var user2=new User()
console.log(`${user2.name}: ${user2.age} ${user2.gender}`)
user2.display();