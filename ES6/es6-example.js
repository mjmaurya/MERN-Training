//Defining Constructor

// class Person{
//     constructor(){
//         this.name = "MAnoj";
//         this.age = 23;
//     }
//    displayDetails(){
//         console.log(this.name);
//         console.log(this.age);
//     }
// }

// var person1 = new Person();
// person1.displayDetails();

// Defining Parameterized Constructor

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
        Person.country = "India";
    }
    static wellcomeMessages(){
        console.log("Welcome to our company");
    }
   displayDetails(){
        console.log(this.name);
        console.log(this.age);
    }
}

// var person1 = new Person("Shreya",23);
// person1.displayDetails();

class Employee extends Person{
    constructor(name, age, salary,designation){
        super(name, age);
        this.salary = salary;
        this.designation = designation;
    }

    displayDetails(){
        super.displayDetails();
        console.log(`Country: ${Person.country}`);
        console.log(`Salary: ${this.salary}`);
        console.log(`Designation: ${this.designation}`);
    }
}

class Customer extends Person{
    constructor(name, age, amount){
        super(name, age);
        this.amount = amount;
    }
    displayDetails(){
        super.displayDetails();
        console.log(this.amount);
    }
}
Person.wellcomeMessages();
console.log("Employee Details: ");

var emp1 = new Employee("Shreya",23,20000,"Software Developer");
emp1.displayDetails();

console.log("Customer Details: ");
var cos1 = new Customer("Shreya",23,10000);
cos1.displayDetails();
