var Employee= require('./Employee');
var emp1= new Employee('John', 23, 100000, 'Software');

console.log(`Employee Name: ${emp1.name}`)
console.log(`Employee Age: ${emp1.age}`)
console.log(`Employee Salary: ${emp1.salary}`)
console.log(`Employee Designation: ${emp1.designation}`)