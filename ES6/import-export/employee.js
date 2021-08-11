
var Person=require('./person');

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

module.exports = Employee;