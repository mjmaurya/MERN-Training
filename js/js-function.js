// // Simple Function
// function sayHello() {
//     console.log('Hello World!');
// }
// sayHello();
// sayHello();
// Function with parameters
// function getFullName(firstName, lastName) {
//     console.log(`${firstName} ${lastName}`);
// }
// getFullName('John', 'Doe');
// getFullName(200, 400);
// getFullName(200, 400,55);

// function getFullName(){
//     for(var i = 0; i < arguments.length; i++){
//         console.log(arguments[i]);
//     }
// }
// getFullName('John', 'Doe');
// getFullName('John', 'Doe', 'John Doe');
// getFullName('John', 'Doe', 'John Doe', 'John Doe');

// Function with return
// function getFullName(firstName, lastName){
//     return(`${firstName} ${lastName}`);
// }

// console.log(getFullName('John', 'Doe'));
// var fullName = getFullName('John', 'Doe');
// console.log(fullName);

//Function Expression

// var getFullName = function getFullName(firstName, lastName){
//     console.log(`${firstName} ${lastName}`);
// };
// getFullName('John', 'Doe');

// // Anynomous Function
// var fullName=function getFullName(firstName, lastName){
//     return(`${firstName} ${lastName}`);
// }
// console.log(fullName('MJ', 'Maurya'));

// Working with Arrow Function

// var sayHello=()=>{
//     console.log('Hello World!');
// };
// sayHello();

// var add=(a,b)=>a+b;
// console.log(add(1,2));

// Define a function that return name and acces of role

// Input getUserRole(name, role)

var getUserRole = function (name, role){
    switch(role){
        case 'admin':
            return `${name} get Full Access`;
        case 'subadmin':
            return `${name} get access to create/delete courses`;
        case 'testprep':
            return `${name} get access to create/delete test tests`;
        case 'user':
            return `${name} get access to view courses`;
        default:
            return `${name} is an unknown role`;
    }
};

console.log(getUserRole('John', 'admin'));
console.log(getUserRole('John', 'subadmin'));
console.log(getUserRole('John', 'testprep'));
console.log(getUserRole('John', 'user'));