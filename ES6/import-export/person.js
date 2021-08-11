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

module.exports = Person;