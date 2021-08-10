function Person(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
    
}

Person.prototype.fullName=function(){
    return this.firstName+" "+this.lastName;
};

function Employee(firstName,lastName,salary,designation){
    Person.call(this,firstName,lastName);
    this.salary=salary;
    this.Designation=designation;
}

Person.prototype.salaryDetails=function(){
    return `Salary : ${this.salary}, Designation : ${this.Designation}`;
}

Employee.prototype=new Person();
Employee.prototype.constructor=Employee;

var employee1=new Employee("Ravi","Kumar",10000,"Software Developer");
console.log(employee1.fullName());
console.log(employee1.salaryDetails());
