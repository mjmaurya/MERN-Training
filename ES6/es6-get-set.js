'use strict'

class Person{
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
    get age(){
        return this._age;
    }
    set age(value){
        if(value < 0 || value > 120){
            console.log("Invalid age.");
            return;
        }
        this._age = value;
    }
}

var person = new Person();
person.name = "John";
person.age = 30;
console.log(person.name);
console.log(person.age);
