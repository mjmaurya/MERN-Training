// // Empty Object Literal
// var person={}
// // Attach Property and Method to Object Literal
// person.firstName="Manoj"
// person.lastName="Kumar"
// person.getFullName=function(){
//     console.log(this.firstName+" "+this.lastName)
// }
// // Accessing Object Literal Properties
// person.getFullName()
// console.log(person)
// console.log(person.firstName)

var person={
    firstName:"Manoj",
    lastName:"Kumar",
    getFullName:function(){
        console.log(this.firstName+" "+this.lastName)
    },
    address:{
        city:"Bangalore",
        state:"Karnataka",
        country:"India"
    },
    getAddress:function(){
        console.log(this.address.city+" "+this.address.state+" "+this.address.country)
    }   

}
person.getFullName()
person.getAddress()
